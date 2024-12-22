import logo from '../components/img/OwlLingO_logo.png';

const NoChatSelected = () => {
  return (
    <div className="hidden md:flex w-full flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <img
                src={logo}
                alt="logo"
                className="size-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold animate-pulse">Welcome to OwlLingO!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
