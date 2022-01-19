import * as S from './styles'

const Main = ({
  title = 'React Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
