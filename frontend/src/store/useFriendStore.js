import { create } from 'zustand';
import toast from 'react-hot-toast';
import { axiosInstance } from '../lib/axios';

export const useFriendStore = create((set) => ({
  isSearching: false,
  searchResult: [],
  suggested: [],
  isSuggesting: false,
  myFreinds: [],
  myFreindReq: [],
  totalPages: [],

  search: async (data, page = 1, limit = 10) => {
    set({ isSearching: true });
    try {
      const res = await axiosInstance.post('/freinds/search', {
        ...data,
        page,
        limit,
      });
      const paginationInfo = res.data[0];
      set({
        searchResult: res.data,
        currentPage: paginationInfo.currentPage,
        totalPages: paginationInfo.totalPages,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to fetch data');
    } finally {
      set({ isSearching: false });
    }
  },

  suggest: async (data) => {
    try {
      set({ isSuggesting: true });
      const res = await axiosInstance.get('/freinds/suggest', data);
      set({ suggested: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSuggesting: false });
    }
  },

  sendRequest: async (receiverId) => {
    try {
      const data = { receiverId };
      const res = await axiosInstance.put('/freinds/sendRequest', data);
      if (res) return toast.success('User added Succesfully');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  loadFriends: async (data) => {
    try {
      const res = await axiosInstance.get('/freinds/loadFriends', data);
      if (!res) return toast.error('Cant load your friends');
      set({ myFreinds: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  loadFriendReq: async (data) => {
    try {
      const res = await axiosInstance.get('/freinds/loadFriendReq', data);
      if (!res) return toast.error('Cant load your friend requests');
      set({ myFreindReq: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  acceptRequest: async (senderId) => {
    try {
      const data = { senderId };
      const res = await axiosInstance.put('/freinds/acceptRequest', data);
      if (res) return toast.success('Freind Requested accepted successfully');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  delRequest: async (senderId) => {
    try {
      const data = { senderId };
      const res = await axiosInstance.put('/freinds/delRequest', data);
      if (res) return toast.success('Friend Request deleted successfully');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  cancelRequest: async (senderId) => {
    try {
      const data = { senderId };
      const res = await axiosInstance.put('/freinds/cancelRequest', data);
      if (res) return toast.success('Friend Request cancelled successfully');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
