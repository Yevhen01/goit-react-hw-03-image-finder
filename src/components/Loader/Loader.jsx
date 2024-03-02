import { Bars } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export default function Spiner() {
  return (
    <LoaderContainer>
      <Bars
        height="80"
        width="80"
        color="#265073"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
}
