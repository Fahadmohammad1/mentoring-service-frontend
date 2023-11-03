import Image from "next/image";
import sponsor from "../../assets/sponsor.jpg";

const Sponsor = () => {
  const sponsors = [
    {
      id: 1,
      image:
        "https://cdn.kastatic.org/images/supporters-logos/bank-of-america-dark-gray@2x.png",
    },
    {
      id: 2,
      image:
        "https://cdn.kastatic.org/images/supporters-logos/college-board-dark-gray@2x.png",
    },
    {
      id: 3,
      image:
        "https://cdn.kastatic.org/images/supporters-logos/ann-and-john-doerr-dark-gray@2x.png",
    },
    {
      id: 4,
      image:
        "https://cdn.kastatic.org/images/supporters-logos/gates-foundation-dark-gray@2x.png",
    },
    {
      id: 5,
      image:
        "https://cdn.kastatic.org/images/supporters-logos/lemann-foundation-dark-gray@2x.png",
    },
    {
      id: 6,
      image:
        "https://cdn.kastatic.org/images/supporters-logos/tata-trusts-dark-gray@2x.png",
    },
    {
      id: 7,
      image:
        "https://cdn.kastatic.org/images/supporters-logos/carlos-rodriguez-pastor-dark-gray@2x.png",
    },
    {
      id: 8,
      image:
        "https://cdn.kastatic.org/images/supporters-logos/valhalla-dark-gray@2x.png",
    },
  ];
  return (
    <section className="my-24">
      <h1 className="text-3xl text-center text-black font-bold mb-10">
        Sponsors
      </h1>
      <div className="lg:grid grid-cols-4 gap-y-10">
        {sponsors.map((s) => (
          <Image
            className="mx-auto my-auto"
            key={s.id}
            src={s.image}
            width={200}
            height={200}
            alt="sponsor"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsor;
