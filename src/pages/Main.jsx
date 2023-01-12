// import Hero from 'components/Hero/Hero';
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
// import Footer from 'components/Footer/Footer';
// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function Main() {
  return (
    <div
    // className="content"
    >
      <Hero />
      <About />
      {/* <Footer /> */}
    </div>
  );
}
