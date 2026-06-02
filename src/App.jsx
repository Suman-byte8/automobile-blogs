import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const BlogListPage = lazy(() => import("./pages/BlogListPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const WriteForUsPage = lazy(() => import("./pages/WriteForUsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const AdvertisePage = lazy(() => import("./pages/AdvertisePage"));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cars/*" element={<BlogListPage />} />
              <Route path="/bikes/*" element={<BlogListPage />} />
              <Route path="/ev/*" element={<BlogListPage />} />
              <Route path="/buying-guide" element={<BlogListPage />} />
              <Route path="/insurance" element={<BlogListPage />} />
              <Route path="/accessories" element={<BlogListPage />} />
              <Route path="/regional" element={<BlogListPage />} />
              <Route path="/post/:slug" element={<BlogPostPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/write-for-us" element={<WriteForUsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/advertise" element={<AdvertisePage />} />
              <Route
                path="*"
                element={
                  <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
                    <h1 className="text-6xl font-bold text-gray-300">404</h1>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">
                      Page Not Found
                    </h2>
                    <p className="mt-2 text-gray-600">
                      The page you're looking for doesn't exist.
                    </p>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        {/* <Newsletter /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
