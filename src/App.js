
import './App.css';
import { useState } from 'react';
import { providers, ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { darkTheme, lightTheme, Theme,SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import Swap from './Component/Uniswap';

function App() {

  return (
    <Swap></Swap>
  );
}

export default App;
