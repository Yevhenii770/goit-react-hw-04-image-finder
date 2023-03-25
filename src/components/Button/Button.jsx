import { Button, Divbtn } from './Button.styled';
const ButtonLoadMore = ({ handleClickBtn }) => (
  <Divbtn>
    <Button type="button" onClick={handleClickBtn}>
      Load more
    </Button>
  </Divbtn>
);

export default ButtonLoadMore;
