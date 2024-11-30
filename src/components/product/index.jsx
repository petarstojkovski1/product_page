import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

import Details from "../sections/details";

const article = {
  id: 128492,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description_short:
    "Vestibulum a velit mauris. Vestibulum sollicitudin tempor ipsum in dictum. Donec quis suscipit augue, quis tempus turpis.",
  description_long:
    "Maecenas pretium mi a ex lacinia volutpat. Cras gravida odio ut libero blandit ornare. Pellentesque et tempus lacus, eu viverra orci. Quisque suscipit felis vitae ligula finibus efficitur. Sed in fringilla nulla. Sed dictum tortor et lectus porta, sit amet rhoncus sem consectetur. Duis eleifend lectus id scelerisque auctor. Morbi posuere arcu lacus, ac euismod nulla placerat nec. Proin et accumsan nisl. Sed imperdiet lacus ac commodo pharetra.\n\nSuspendisse et dui ornare, laoreet mauris vel, ullamcorper nunc. Suspendisse a libero id justo condimentum fermentum non id ex. Phasellus aliquam magna ac eleifend molestie. Aliquam tincidunt elit non libero posuere, a feugiat orci gravida. Donec tempor urna in nisl aliquet convallis.\n\nDuis nec vestibulum odio. Maecenas lobortis sit amet nunc ac porttitor. Maecenas ultrices urna sed mattis faucibus. Phasellus dui turpis, mattis eget lectus a, volutpat sagittis diam. Vestibulum dictum efficitur magna nec hendrerit. Proin a cursus sapien, rhoncus viverra lacus. Nullam commodo dapibus turpis, at sagittis tellus tincidunt eu. Fusce viverra porta leo. Vivamus in ipsum nec elit tincidunt tristique.",
  supplier_name: "Conntech GmbH",
  supplier_link: "http://google.com",
  stars: 3.2,
  price: 2598.9,
  price_breaks: {
    20: 2398.9,
    50: 2109.9,
    100: 1999.9,
  },
  currency: "EUR",
  transport_costs: 34.9,
  vat_percent: 10,
  images: ["image1.jpg", "image2.jpg", "image3.png"],
  minimum_order_quantity: 1,
  delivery_time: 12,
  unit: "PCE",
  features: {
    "Feature 1": "Green",
    "Feature 2": "20cm",
    "Feature 3": "XL",
  },
  attachments: [
    {
      file_label: "Data Sheet 101",
      file_size: 2049,
      file_name: "data_sheet.tgz",
      file_link: "https://google.com/data_sheet.tgz",
    },
    {
      file_label: "Data Sheet 201",
      file_size: 29341,
      file_name: "data_sheet_2.tgz",
      file_link: "https://google.com/data_sheet_2.tgz",
    },
  ],
  keywords: ["Lorem Ipsum", "Dolor", "Sit"],
};

const App = () => {
  return (
    <>
      <p>Product</p>

      <Box bgcolor={(theme) => theme.palette.grey["300"]} p={2}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 10 }}>
            <Typography variant="h5" color="primary" gutterBottom>
              Description
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            {article?.description_long.split("\n").map((line, index) => (
              <Typography key={index} gutterBottom variant="body2">
                {line}
              </Typography>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Details
              keywords={article.keywords}
              attachments={article.attachments}
              features={article.features}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            {" "}
            <Details />{" "}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;