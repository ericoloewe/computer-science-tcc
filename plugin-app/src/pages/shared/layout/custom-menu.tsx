import React, { useState } from "react";
import { IconButton, Menu } from "@material-ui/core";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";

export function CustomMenu({ menuItems }: { menuItems: JSX.Element[] }): React.ReactElement {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <IconButton edge="end" color="inherit" aria-label="more" onClick={(e) => setAnchorEl(e.currentTarget)}>
        <MoreVertIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {React.Children.map(menuItems, (mi) => {
          return React.cloneElement(mi, {
            ...mi.props,
            onClick: (e: any) => {
              const { onClick } = mi.props;
              setAnchorEl(null);
              onClick && onClick(e);
            },
          });
        })}
      </Menu>
    </>
  );
}
