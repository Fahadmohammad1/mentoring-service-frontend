import { GiVideoConference } from "react-icons/gi";
import { FcHome, FcBusinessman, FcReadingEbook } from "react-icons/fc";
import OverviewCard from "./OverviewCard";

const Overview = () => {
  const overview = [
    {
      id: 1,
      title: "One to One Guidline",
      icon: <FcReadingEbook />,
      description:
        "We provide one to one live session for everyone. Where students can get personalized guidline.",
    },
    {
      id: 2,
      title: "Home Tutors",
      icon: <FcHome />,
      description:
        "Any students can hire home tutor for them. They can book any live session and discuss about it in Google meet.",
    },

    {
      id: 3,
      title: "Qualified Mentors",
      icon: <FcBusinessman />,
      description:
        "We provide qualitiful mentors from around the world whom are expert at their teaching topic.",
    },
  ];
  return (
    <section className="my-24">
      <h1 className="text-3xl text-center text-black font-bold mb-10">
        How we help learners
      </h1>
      <div className="flex gap-x-10 justify-center items-center">
        {overview.map((ov) => (
          <OverviewCard key={ov.id} overview={ov} />
        ))}
      </div>
    </section>
  );
};

export default Overview;
