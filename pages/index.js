export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/one",
      permanent: false,
    },
  };
}

export default function Home() {
  return null;
}
