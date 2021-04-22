import DefaultLayout from "../components/defaultLayout";
import LeftSideBar from "../components/layouts/leftSideBar";

export default function Home({title, children, todos}) {
  return (
  <DefaultLayout title="Enis ">
    <LeftSideBar>
      <div>Contact Page</div>
    </LeftSideBar>
  </DefaultLayout>
  );
}
