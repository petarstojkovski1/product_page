import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Details from '../shared/details';
import Description from '../shared/description';
import PricingShipping from '../shared/pricing-shipping';
import Gallery from '../shared/gallery';
import StarRating from '../common/star-rating';
import Header from './header';

import discountIcon from '../../assets/images/icons/discount.svg';
import AddToCart from './addToCart';

import { addToCart as addToCartAction } from '../../store/cart/cartSlice';

const App = () => {
  const [isAddToCartVisible, setIsAddToCartVisible] = useState(true);
  const addToCartRef = useRef(null);

  const article = useSelector((state) => state.article.article);

  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAddToCartVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (addToCartRef.current) {
      observer.observe(addToCartRef.current);
    }

    return () => {
      if (addToCartRef.current) {
        observer.unobserve(addToCartRef.current);
      }
    };
  }, []);

  const addItemToCart = (quantity) => {
    dispatch(addToCartAction({ id: article?.id, quantity }));
  };

  return (
    <>
      <Header
        articleName={article?.title}
        articleId={article?.id}
        addToCart={addItemToCart}
        unit={article?.unit}
        isAddToCartVisible={isAddToCartVisible}
      />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5 }}>
          {article?.images.length ? <Gallery images={article?.images} /> : null}
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            py={1}
            pl={{ xs: 2, md: 0 }}
          >
            <Box>
              <Typography
                sx={(theme) => ({ color: theme.palette.typography.dark })}
                fontSize="20px"
                gutterBottom
              >
                {article?.title}
              </Typography>
              <Typography
                sx={(theme) => ({ color: theme.palette.typography.main })}
                variant="body2"
              >
                by
                <Link
                  href={article?.supplier_link}
                  sx={(theme) => ({
                    color: theme.palette.link.main,
                    textDecoration: 'none',
                    ml: 1,
                  })}
                >
                  {article?.supplier_name}
                </Link>
              </Typography>
              <StarRating rating={article?.stars} boxSx={{ mt: 1, mb: 2 }} />
              <Box display="flex" alignItems="center">
                <Typography color="black" fontWeight="Black">
                  {`${Number(article?.price).toFixed(2)} ${article?.currency}`}
                </Typography>
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.typography.main,
                    ml: 0.5,
                  })}
                  variant="body2"
                >
                  {` + ${Number(article?.transport_costs).toFixed(2)} ${article?.currency} shipping`}
                </Typography>
                <SvgIcon
                  component={discountIcon}
                  inheritViewBox
                  sx={(theme) => ({
                    color: theme.palette.icon.main,
                    width: '20px',
                    ml: 1,
                  })}
                />
              </Box>
              <Typography
                variant="body2"
                sx={(theme) => ({ color: theme.palette.typography.main })}
              >{` all prices incl. ${article?.vat_percent}% taxes`}</Typography>
            </Box>
            <Box ref={addToCartRef}>
              <AddToCart unit={article?.unit} addToCart={addItemToCart} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box bgcolor={(theme) => theme.palette.grey['300']} p={2}>
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
