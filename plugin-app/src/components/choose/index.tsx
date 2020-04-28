import "./style.scss";
import React from "react";
import { TextField, ListItem, ListItemAvatar, Avatar, ListItemText, List, Paper, Typography } from "@material-ui/core";

interface Props {
  items: ChooseItem[];
  onChoose?: (item: ChooseItem) => void;
  searchLabel?: string;
  searchValue?: string;
  onChangeSearch?: (s: string) => void;
}

export interface ChooseItem {
  id: string;
  title: string;
  description?: string;
  image?: { src: string; alt: string };
  selected?: boolean;
}

export function Choose({ items, searchLabel: textFieldLabel, onChoose, onChangeSearch, searchValue }: Props) {
  return (
    <div className="choose-component">
      <TextField
        label={textFieldLabel}
        onChange={(e) => onChangeSearch && onChangeSearch(e.target.value)}
        value={searchValue}
      />

      {!textFieldLabel || !!searchValue ? (
        <Paper className="paper">
          <List className="list" dense={false}>
            {items.map((ci) => (
              <ListItem key={ci.id} selected={ci.selected} onClick={() => onChoose && onChoose(ci)} button={true}>
                {ci.image && (
                  <ListItemAvatar>
                    <Avatar src={ci.image?.src} alt={ci.image.alt} />
                  </ListItemAvatar>
                )}
                <ListItemText primary={ci.title} secondary={ci.description} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <Typography paragraph>Digite um termo a ser procurado</Typography>
      )}
    </div>
  );
}
