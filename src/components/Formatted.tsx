import styled from '../shared/styled';

const Formatted = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
  }

  hr {
    box-sizing: border-box;
    height: initial;
    margin: 3rem auto;
    border: 0;
    text-align: center;

    ::before {
      content: '…';
      font-size: 2rem;
      line-height: 0;
      color: ${({ theme }) => theme.colors.gray4};
    }
  }
`;

export default Formatted;
