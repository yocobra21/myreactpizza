import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="139" cy="139" r="122" />
      <rect x="0" y="316" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="275" rx="6" ry="6" width="280" height="29" />
      <rect x="5" y="414" rx="7" ry="7" width="88" height="30" />
      <rect x="150" y="409" rx="20" ry="20" width="129" height="40" />
    </ContentLoader>
  )
}

export default LoadingBlock;
