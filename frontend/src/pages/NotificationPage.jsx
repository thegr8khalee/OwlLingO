import Notification from "../components/Notification"

const NotificationPage = () => {
  return (
    <div className="h-screen bg-base-100">
        <div className="max-w-2xl mx-auto p-4 py-20">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
            <Notification/>  
        </div>
    </div>
    </div>
  )
}

export default NotificationPage