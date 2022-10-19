import { authRoles } from 'app/auth/authRoles';
import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const PendingListing = Loadable(lazy(() => import('./PendingListing')));
const DeclinedListing = Loadable(lazy(() => import('./DeclinedListings')));
const ApprovedListing = Loadable(lazy(() => import('./ApprovedListings')));
const AddListing = Loadable(lazy(() => import('./AddListing')));

//todo edit roles here
const listingRoutes = [
  { path: '/listing/pending', element: <PendingListing />, auth: authRoles.editor },
  { path: '/listing/add', element: <AddListing />, auth: authRoles.editor },
  { path: '/listing/approved', element: <ApprovedListing />, auth: authRoles.editor },
  { path: '/listing/declined', element: <DeclinedListing />, auth: authRoles.editor }
];

export default listingRoutes;
