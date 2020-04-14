import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@material-ui/core";

interface Props {
  isOpen: boolean;
  onSubmit: (newName: string) => void;
}

export function RenameDialog({ isOpen, onSubmit }: Props) {
  const [playlistName, setPlaylistName] = useState("");

  return (
    <Dialog open={isOpen} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Renomear playlist</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome da playlist"
          type="text"
          fullWidth
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={(e) => onSubmit(playlistName)} color="primary">
          Renomear
        </Button>
      </DialogActions>
    </Dialog>
  );
}
