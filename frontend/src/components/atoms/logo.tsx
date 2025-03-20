import { useContext } from 'react';

import { ChainlitContext } from 'client-types/*';

interface Props {
  width?: number;
  style?: React.CSSProperties;
}

export const Logo = ({ style }: Props) => {
  const apiClient = useContext(ChainlitContext);

  return <img src={apiClient.getLogoEndpoint()} alt="logo" style={style} />;
};
