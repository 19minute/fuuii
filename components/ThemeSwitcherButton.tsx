"use client";

import React, { useState } from 'react';
import { 
  Button, 
  Menu, 
  MenuItem, 
  ListItemText
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeSwitcherButton: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (themeId: string) => {
    setTheme(themeId);
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        size="small"
      >
        {currentTheme.name} Theme
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {availableThemes.map((theme) => (
          <MenuItem
            key={theme.id}
            selected={theme.id === currentTheme.id}
            onClick={() => handleThemeSelect(theme.id)}
          >
            <ListItemText>{theme.name}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ThemeSwitcherButton;
