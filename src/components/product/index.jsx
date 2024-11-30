import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import Details from "../sections/details";
import Description from "../sections/description";
import PricingShipping from "../sections/pricing-shipping";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const article = useSelector((state) => state.article.article);
  const dispatch = useDispatch();

  return (
    <>
      <p>Product</p>

      <Box bgcolor={(theme) => theme.palette.grey["300"]} p={2}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 10 }}>
            <Description description={article?.description_long} />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Details
              keywords={article?.keywords}
              attachments={article?.attachments}
              features={article?.features}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <PricingShipping
              priceBreaks={article?.price_breaks}
              currency={article?.currency}
              minimumQuantity={article?.minimum_order_quantity}
              deliveryTime={article?.delivery_time}
              unit={article?.unit}
              transportCosts={article?.transport_costs}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
