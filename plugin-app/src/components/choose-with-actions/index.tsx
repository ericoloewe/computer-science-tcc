import "./style.scss";
import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  Paper,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

interface Props {
  actionIcon: any;
  items: ChooseItem[];
}

export interface ChooseItem {
  title: string;
  description?: string;
  image?: { src: string; alt: string };
  selected?: boolean;
}

export function ChooseWithActions({ items, actionIcon }: Props) {
  return (
    <div className="choose-with-actions-component">
      <Paper className="paper">
        <List className="list" dense={false}>
          {items.map((ci) => (
            <ListItem key={ci.title} selected={ci.selected}>
              {ci.image && (
                <ListItemAvatar>
                  <Avatar src={ci.image?.src} alt={ci.image.alt} />
                </ListItemAvatar>
              )}
              <ListItemText primary={ci.title} secondary={ci.description} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  {actionIcon}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
