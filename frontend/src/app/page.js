
import SideBar from '@/ui/components/sidebar';
import Feeds from '@/ui/components/feeds/feeds';
import UploadBox from '@/ui/components/uploadBox';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
          
          < SideBar />
          <Feeds />
          <UploadBox />
          
    </main>
  )
}
