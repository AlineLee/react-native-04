import styled from 'styled-components/native';

export const Item = styled.View`
  padding: 4px 16px;
  margin-bottom: 16px;
`;

export const ItemTitle = styled.Text`
  color: #fff;
  padding-bottom: 4px;
  color: ${({color}) => color};
`;

export const ItemDescription = styled.Text`
  color: #fff;
  padding-bottom: 16px;
  color: ${({color}) => color};
`;

export const ItemImagePlaceholder = styled.Image`
  height: 200px;
  width: 100%;
  background-color: ${({isDark}) => (isDark ? '#454545' : '#C5C5C5')};
`;

export const ItemLinkButton = styled.Text`
  color: #3fff89;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  text-decoration-line: underline;
`;
