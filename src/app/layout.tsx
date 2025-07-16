import type { Metadata } from "next"
import "./globals.css"
import React, { PropsWithChildren } from "react"
import { Head, Banner } from "nextra/components"
import { Footer, Layout as NextraLayout, Navbar } from "nextra-theme-docs"
import { getPageMap } from "nextra/page-map"
import "nextra-theme-docs/style.css"

export const metadata: Metadata = {
    title: "CiSwap Docs",
    description: "Official documentation for CiSwap — the first virtual AMM on Aptos using synthetic liquidity and ciTokens.",
}

const banner = (
    <Banner storageKey="ciswap-docs-banner">
    🎉 <strong>CiSwap Testnet</strong> is live! Try the first virtual AMM on Aptos using synthetic liquidity.{" "}
        <a href="https://ciswap.starci.net" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
      → Launch App
        </a>
    </Banner>
)

const navbar = (
    <Navbar
        logo={<div className="font-bold">CiSwap</div>}
    // Add nav items if needed
    />
)

const footer = <Footer>MIT {new Date().getFullYear()} © CiSwap.</Footer>

export default async function RootLayout({ children }: PropsWithChildren) {
    const pageMap = await getPageMap()

    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <Head>
                {/* Basic Meta Tags */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Official documentation for CiSwap — the first virtual AMM on Aptos using synthetic liquidity." />
                <meta name="keywords" content="CiSwap, Aptos, AMM, DeFi, virtual liquidity, synthetic liquidity, ciToken, Move, Web3, blockchain" />
                <meta name="author" content="CiSwap Labs" />

                {/* Open Graph (for social media sharing) */}
                <meta property="og:title" content="CiSwap Docs" />
                <meta property="og:description" content="Learn how CiSwap works — the first virtual AMM on Aptos using internal debt tokens (ciTokens) to bootstrap liquidity." />
                <meta property="og:image" content="https://ciswap.starci.net/og-cover.png" />
                <meta property="og:url" content="https://docs.ciswap.starci.net" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="CiSwap Docs" />
                <meta name="twitter:description" content="Explore the technical docs behind CiSwap's virtual AMM design on Aptos." />
                <meta name="twitter:image" content="https://ciswap.starci.net/og-cover.png" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                <title>CiSwap Docs</title>
            </Head>
            <body>
                <NextraLayout
                    sidebar={{ autoCollapse: true }}
                    banner={banner}
                    navbar={navbar}
                    darkMode={true}
                    pageMap={pageMap}
                    docsRepositoryBase="https://github.com/starci-labs/ciswap-docs" // Thay link repo nếu cần
                    footer={footer}
                >
                    {children}
                </NextraLayout>
            </body>
        </html>
    )
}