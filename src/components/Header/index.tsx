import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import { Container, Content, HeaderButton } from './styles';

export function Header(){
  return (
    <Container>
      <Content>
        <h1>Currency Money</h1>
        <HeaderButton>
          <FontAwesomeIcon icon={faArrowRotateRight} />
          Reload
          </HeaderButton>
      </Content>
    </Container>
    );
}