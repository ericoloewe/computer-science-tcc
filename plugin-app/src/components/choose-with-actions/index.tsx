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
  onPrimaryAction?: () => void;
  linkComponent?: any;
}

export interface ChooseItem {
  id: string | number;
  title: string;
  description?: string;
  image?: { src: string; alt: string };
  selected?: boolean;
}

export function ChooseWithActions({ items, actionIcon, onPrimaryAction, linkComponent }: Props) {
  const DefaultLinkComponent = (props: any) => props.children;
  const LinkComponent = linkComponent || DefaultLinkComponent;

  return (
    <div className="choose-with-actions-component">
      <Paper className="paper">
        <List className="list" dense={false}>
          {items.map((ci) => (
            <LinkComponent key={ci.id} item={ci}>
              <ListItem selected={ci.selected}>
                {ci.image && (
                  <ListItemAvatar>
                    <Avatar src={ci.image?.src} alt={ci.image.alt} />
                  </ListItemAvatar>
                )}
                <ListItemText primary={ci.title} secondary={ci.description} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={onPrimaryAction} aria-label="like">
                    {actionIcon}
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </LinkComponent>
          ))}
        </List>
      </Paper>
    </div>
  );
}
