export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
          <div className='flex-auto w-1/6 sidebar pt-10  flex-col'>
            <div className=" avatar justify-center items-center">
            </div>
            <div className="pt-10"> My Cloud</div>
            <div className="pt-10"> Settings</div>
            <div className="pt-2"> Logout </div>
          </div>

          <div className='flex-auto w-1/2'>
          <div class="search pt-5 px-10 ">
            <input className="h-10 w-full " type="text" id="search-input"  placeholder="Search..." />
           
          </div>
          </div>
          <div className='flex-auto w-1/4'>Upload</div>
    </main>
  )
}
