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
  actionIcon: JSX.Element;
  selectedActionIcon: JSX.Element;
  items: ChooseItem[];
  onPress?: (ci: ChooseItem) => void;
  onPressAction?: (ci: ChooseItem) => void;
  linkComponent?: any;
}

export interface ChooseItem {
  id: string;
  title: string;
  description?: string;
  image?: { src: string; alt: string };
  selected?: boolean;
}

export function ChooseWithActions({
  items,
  actionIcon,
  selectedActionIcon,
  onPress,
  onPressAction,
  linkComponent,
}: Props) {
  const DefaultLinkComponent = (props: any) => props.children;
  const LinkComponent = linkComponent || DefaultLinkComponent;

  return (
    <div className="choose-with-actions-component">
      <Paper className="paper">
        <List className="list" dense={false}>
          {items.map((ci) => (
            <LinkComponent key={ci.id} item={ci}>
              <ListItem selected={ci.selected} button={!!onPress as any} onClick={(e) => onPress && onPress(ci)}>
                {ci.image && (
                  <ListItemAvatar>
                    <Avatar src={ci.image?.src} alt={ci.image.alt} />
                  </ListItemAvatar>
                )}
                <ListItemText primary={ci.title} secondary={ci.description} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => onPressAction && onPressAction(ci)} aria-label="like">
                    {ci.selected ? selectedActionIcon : actionIcon}
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
