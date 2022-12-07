import React, { useState } from "react";
import "./Mint.css";
import { Button } from "@mui/material";
export const Mint = ({ mintStart, mint, sold }) => {
  let disabled = !mintStart || sold;
  return (
    <div className="mint-btn-container">
      <div className="mint-btn">
        <Button variant="contained" disabled={disabled} onClick={mint}>
          Mint
        </Button>
      </div>
    </div>
  );
};
