import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(
    localStorage.getItem("colorMode") || null
  );
  const [currentMode, setCurrentMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);

    setModeMain();
  };

  const setModeMain = () => {
    const htmlBody = document.querySelector("html");

    if (localStorage.getItem("themeMode") === "dark") {
      htmlBody.classList.add("dark");
      htmlBody.classList.remove("bg-main-bg");
      htmlBody.classList.add("bg-main-dark-bg");
    } else {
      htmlBody.classList.remove("dark");
      htmlBody.classList.remove("bg-main-dark-bg");
      htmlBody.classList.add("bg-main-bg");
    }
  };

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };

  const setColorMain = () => {
    if (!currentColor) {
      localStorage.setItem("colorMode", "#1A97F5");
    }
    setCurrentColor(localStorage.getItem("colorMode"));
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const value = {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    setMode,
    setColor,
    currentMode,
    themeSettings,
    setThemeSettings,
    setModeMain,
    setColorMain,
    initialState,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
