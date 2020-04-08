import "./style.scss";
import React from "react";
import {
  TextField,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  Paper,
} from "@material-ui/core";

interface Props {
  textFieldLabel: string;
  items: ChooseItem[];
}

export interface ChooseItem {
  title: string;
  image?: { src: string; alt: string };
  selected?: boolean;
}

export function Choose({ items, textFieldLabel }: Props) {
  return (
    <div className="choose-component">
      <TextField label={textFieldLabel} />

      <Paper className="paper">
        <List className="list" dense={false}>
          {items.map((ci) => (
            <ListItem selected={ci.selected}>
              {ci.image && (
                <ListItemAvatar>
                  <Avatar src={ci.image?.src} alt={ci.image.alt} />
                </ListItemAvatar>
              )}
              <ListItemText primary={ci.title} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
