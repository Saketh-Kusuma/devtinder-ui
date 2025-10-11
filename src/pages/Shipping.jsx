import { constants } from "../utils/constants";

export function Shipping() {
return (
<main className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
<header className="mb-6">
<h1 className="text-2xl font-semibold">Shipping Policy</h1>
<p className="text-sm text-gray-500 mt-1">Last updated: October 2025</p>
</header>


<section className="space-y-4 text-gray-800 leading-relaxed">
<p>At <strong>{COMPANY_NAME}</strong>, we aim to deliver your order quickly and securely.</p>


<div>
<h2 className="text-lg font-medium">Processing Time</h2>
<p className="mt-2">Orders are processed within <strong>1–2 business days</strong> (excluding weekends and holidays). You’ll receive tracking details when your order ships.</p>
</div>


<div>
<h2 className="text-lg font-medium">Shipping Rates & Delivery</h2>
<p className="mt-2">Shipping rates are calculated at checkout based on location and weight. Standard delivery typically takes <strong>3–7 business days</strong>, depending on destination.</p>
<p className="mt-2">Delays from weather, logistics, or customs are sometimes unavoidable and are beyond our control.</p>
</div>


<div>
<h2 className="text-lg font-medium">International Shipping</h2>
<p className="mt-2">We offer international shipping to select countries. Any customs duties or taxes are the customer’s responsibility.</p>
</div>


<div>
<h2 className="text-lg font-medium">Missing or Damaged Packages</h2>
<p className="mt-2">If your package is missing or damaged, contact <a href={`mailto:${constants.SUPPORT_EMAIL}`} className="text-indigo-600 hover:underline">{constants.SUPPORT_EMAIL}</a> within 3 days of delivery so we can help resolve the issue.</p>
</div>
</section>
</main>
);
}