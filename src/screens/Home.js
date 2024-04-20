import { MobileView } from 'react-device-detect';
const Home = () => {
  return (
    <MobileView>
      <div className="home">
        <h3>this is mobile</h3>
      </div>
    </MobileView>
  );
};
export default Home;
