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
        content sidebar
        </div>
        <Carousel data={sliderData} Component={SinglePost} navigation="dots" numberOfSlides={{ default: 4, sm: 2, xs: 1}}/> 
      </LeftSideBar>
  </DefaultLayout>
  );
}
