import Carousel from "../components/carousel/carousel";
import DefaultLayout from "../components/defaultLayout";
import LeftSideBar from "../components/layouts/leftSideBar";
import sliderData from "../data/home/sliderSection.json";
import SinglePost from '../components/posts/singlePost'

export default function Home({title, children, todos}) {

  return (
  <DefaultLayout title="About page">
      <LeftSideBar>
        <div>
          sidebar content
        </div>
        <div>
          <Carousel title="someTitle" data={sliderData} navigation="dots" Component={SinglePost} />
        </div>
      </LeftSideBar>
  </DefaultLayout>
  );
}
