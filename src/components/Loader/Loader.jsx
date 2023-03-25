import { ThreeDots } from 'react-loader-spinner';
import { Div } from './Loader.styled';
const Spinner = () => {
  return (
    <Div style={{ textContent: 'center' }}>
      <ThreeDots
        height="120"
        width="120"
        radius="12"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        wrapperClassName=""
        visible={true}
      />
    </Div>
  );
};

export default Spinner;
