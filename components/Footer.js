import React from 'react'

export default function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">About</h5>
                <p>How Airbnb works</p>
                <p>Investors</p>
                <p>HotelTonight</p>
                <p>Careers</p>
                <p>Newsroom</p>
                <p>Airbnb Plus</p>
                <p>Airbnb for Work</p>
                <p>Founders' Letter</p>
                <p>Airbnb 2021</p>
                <p>Airbnb Luxe</p>
                <p>Made possible by Hosts</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Community</h5>
                <p>Diversity & Belonging</p>
                <p>Frontline Stays</p>
                <p>Accessibility</p>
                <p>Guest Referrals</p>
                <p>Airbnb Associates</p>
                <p>Airbnb.org</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Host</h5>
                <p>Host your home</p>
                <p>Responsible hosting</p>
                <p>Host an Online Experience</p>
                <p>Resource Centre</p>
                <p>Host an Experience</p>
                <p>Community Centre</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Support</h5>
                <p>Our COVID-19 Response</p>
                <p>Neighbourhood Support</p>
                <p>Help Centre</p>
                <p>Trust & Safety</p>
                <p>Cancellation options</p>
            </div>
        </footer>
    )
}
