import styled from './Menu.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Menu: React.FC<IProps> = ({ children }) => {
  return <div className={styled.modalContent}>{children}</div>;
};

export default Menu;
