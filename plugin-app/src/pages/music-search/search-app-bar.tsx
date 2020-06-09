import React from "react";
import { AppBar, Toolbar, IconButton, makeStyles, TextField } from "@material-ui/core";
import { ArrowBack as ArrowBackIcon, Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& .MuiInput-underline": {
      "&:after,&:before": {
        borderBottomColor: "white",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#eee",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
  input: {
    color: "white",
  },
});

interface Props {
  onBackClick: () => void;
  onSearchChange: (text: string) => void;
  searchText: string;
}

export function SearchAppBar({ onBackClick, onSearchChange, searchText }: Props) {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary" className="music-app-bar">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="like" onClick={onBackClick}>
          <ArrowBackIcon />
        </IconButton>
        <TextField
          id="standard-basic"
          className={classes.root}
          label="Search"
          onChange={(e) => onSearchChange(e.target.value)}
          value={searchText}
          InputProps={{
            className: classes.input,
          }}
        />
        <div style={{ flexGrow: 1 }} />
        <IconButton edge="end" color="inherit" aria-label="like">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
