import "./style.scss";
import React from "react";
import { TextField, ListItem, ListItemAvatar, Avatar, ListItemText, List, Paper } from "@material-ui/core";

interface Props {
  items: ChooseItem[];
  onChoose?: (item: ChooseItem) => void;
  textFieldLabel: string;
}

export interface ChooseItem {
  id: string | number;
  title: string;
  description?: string;
  image?: { src: string; alt: string };
  selected?: boolean;
}

export function Choose({ items, textFieldLabel, onChoose }: Props) {
  return (
    <div className="choose-component">
      <TextField label={textFieldLabel} />

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
    </div>
  );
}
