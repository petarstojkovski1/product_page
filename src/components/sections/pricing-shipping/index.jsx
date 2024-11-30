import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Grid from '@mui/material/Grid2';

const PricingShipping = ({
  priceBreaks,
  currency,
  minimumQuantity,
  deliveryTime,
  unit,
  transportCosts,
}) => {
  return (
    <Box bgcolor={(theme) => theme.palette.grey['100']} p={2} height="100%">
      <Box>
        <Typography color="primary" textTransform="uppercase">
          Pricing & Shipping
        </Typography>
        <Divider sx={{ my: 1 }} />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Box>
          <List sx={{ listStyleType: 'disc', pl: 2 }} disablePadding dense>
            <ListItem
              sx={{ display: 'list-item', m: 0, p: 0 }}
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
                      sx={(theme) => ({ color: theme.palette.typography.main })}
                    >
                      Minimum order:
                    </Typography>
                    <Typography
                      component="span"
                      fontSize="14px"
                      ml={1}
                      fontWeight="bold"
                    >
                      {`${minimumQuantity} ${unit}`}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <ListItem
              sx={{ display: 'list-item', m: 0, p: 0 }}
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
                      sx={(theme) => ({ color: theme.palette.typography.main })}
                    >
                      Shipping:
                    </Typography>
                    <Typography
                      component="span"
                      fontSize="14px"
                      ml={1}
                      fontWeight="bold"
                    >
                      {`${transportCosts} ${currency}`}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <ListItem
              sx={{ display: 'list-item', m: 0, p: 0 }}
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
                      sx={(theme) => ({ color: theme.palette.typography.main })}
                    >
                      Delivery:
                    </Typography>
                    <Typography
                      component="span"
                      fontSize="14px"
                      ml={1}
                      fontWeight="bold"
                    >
                      {`${deliveryTime} ${deliveryTime > 1 ? 'days' : 'day'}`}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>

        {priceBreaks && Object.keys(priceBreaks).length > 0 ? (
          <Box>
            <Typography
              sx={(theme) => ({ color: theme.palette.grey['500'] })}
              gutterBottom
              mt={2}
            >
              Price Breaks
            </Typography>
            <Grid container>
              <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
                <TableContainer>
                  <Table size="small">
                    <TableBody>
                      {Object.entries(priceBreaks).map(
                        ([key, value], index) => (
                          <TableRow
                            key={key}
                            sx={
                              index === 0
                                ? {
                                    borderTop: '1px solid',
                                    borderColor: 'grey.300',
                                  }
                                : {}
                            }
                          >
                            <TableCell>{`ex ${key} ${unit}`}</TableCell>
                            <TableCell>{`${value} ${currency}/${unit}`}</TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default PricingShipping;
