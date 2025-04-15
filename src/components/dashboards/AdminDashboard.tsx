import Header from "../../others/Header"

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-3">
      < Header />
      <div>
      <form className="flex">
        <h3>Task Title</h3>
        <input type="text" placeholder="Enter task title" />
        <h3>Description</h3>
        <textarea name="" id=""></textarea>
        <h3>date</h3>
        <input type="date" />
        <h3>Assigned to</h3>
        <input type="text" placeholder="Enter employee name" />
        <h3>Categories</h3>
        <input type="text" placeholder="dev,design etc" />
      </form>
      </div>
    </div>
  )
}

export default AdminDashboard
