import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

import attachmentIcon from "../../../assets/images/icons/attachment.svg";

const Details = ({ features, attachments, keywords }) => {
  return (
    <Box bgcolor={(theme) => theme.palette.grey["100"]} p={2} height="100%">
      <Box>
        <Typography color="primary" textTransform="uppercase">
          Details
        </Typography>
        <Divider sx={{ my: 1 }} />
      </Box>
      <Box display="flex" flexDirection="column">
        {features && Object.keys(features).length > 0 ? (
          <Box>
            <Typography sx={(theme) => ({ color: theme.palette.grey["500"] })}>
              Features
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 2 }} disablePadding dense>
              {Object.entries(features).map(([key, value]) => (
                <ListItem
                  key={key}
                  sx={{ display: "list-item", m: 0, p: 0 }}
                  disableGutters
                  dense
                >
                  <ListItemText
                    disableTypography
                    sx={{ m: 0, p: 0 }}
                    primary={
                      <>
                        <Typography
                          component="span"
                          fontSize="14px"
                          sx={(theme) => ({ color: theme.palette.grey["500"] })}
                        >
                          {key}:
                        </Typography>
                        <Typography
                          component="span"
                          fontSize="14px"
                          ml={1}
                          fontWeight="bold"
                        >
                          {value}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        ) : null}

        {attachments?.length > 0 ? (
          <Box>
            <Typography
              sx={(theme) => ({ color: theme.palette.grey["500"] })}
              gutterBottom
              mt={2}
            >
              Attachments
            </Typography>
            {attachments.map((attachment) => (
              <Link
                href={attachment.file_link}
                download
                key={attachment.file_name}
                sx={{ textDecoration: "none", cursor: "pointer" }}
                target="_blank"
              >
                <Box display="flex" mb={1} alignItems="center">
                  <img
                    component="img"
                    src={attachmentIcon}
                    style={{ width: "15px" }}
                  />
                  <Typography
                    variant="body2"
                    ml={1}
                    sx={(theme) => ({ color: theme.palette.info.main })}
                  >
                    {attachment.file_label}
                  </Typography>
                </Box>
              </Link>
            ))}
          </Box>
        ) : null}

        {keywords?.length > 0 ? (
          <Box>
            <Typography
              sx={(theme) => ({ color: theme.palette.grey["500"] })}
              gutterBottom
              mt={2}
            >
              Keywords
            </Typography>
            <Box display="flex">
              {keywords.map((keyword) => (
                <Chip
                  label={keyword}
                  key={keyword}
                  sx={(theme) => ({
                    color: "white.main",
                    backgroundColor: theme.palette.grey["400"],
                    textTransform: "uppercase",
                    mr: 1,
                  })}
                  size="small"
                />
              ))}
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Details;
