import Carousel from "../components/carousel/carousel";
import DefaultLayout from "../components/defaultLayout";
import LeftSideBar from "../components/layouts/leftSideBar";
import sliderData from "../data/home/sliderSection.json";
import SinglePost from '../components/posts/singlePost'

export default function About({title, children, todos}) {

  return (
  <DefaultLayout title="About page">
      <LeftSideBar>
        <div>
        <Carousel data={sliderData} Component={SinglePost} navigation="arrows" /> 
        </div>
        <div>
          <Carousel data={sliderData} Component={SinglePost} navigation="dots" /> 
        </div>
      </LeftSideBar>
  </DefaultLayout>
  );
}
