import React from "react";
import { Auth0Features } from "../components/auth0-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";
import { LoginButton } from "../components/buttons/login-button";

export const HomePage = () => (
  <PageLayout>

    <div style={{
      display: 'flex', height: '90vh',
      width: '100%', justifyContent: 'center', alignItems: 'center'
    }}>

      <LoginButton />
    </div>

  </PageLayout>
);
