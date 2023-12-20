

import Feeds from '../ui/components/feeds.js';
import Sidebar from '../ui/components/sidebar.js';
import UploadFile from '../ui/components/uploadFile.js';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
          < Sidebar />
          < Feeds />
          < UploadFile />
          
    </main>
  )
}
