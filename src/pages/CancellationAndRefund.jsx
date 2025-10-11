import { constants } from "../utils/constants";

export function CancellationRefunds() {
return (
<main className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
<header className="mb-6">
<h1 className="text-2xl font-semibold">Cancellation & Refund Policy</h1>
<p className="text-sm text-gray-500 mt-1">Last updated: {new Date().getMonth()}</p>
</header>


<section className="space-y-4 text-gray-800 leading-relaxed">
<p>
At <strong>{constants.COMPANY_NAME}</strong>, we value your satisfaction. If you’re not entirely happy
with your purchase, we’re here to help.
</p>


<div>
<h2 className="text-lg font-medium">Cancellations</h2>
<ul className="list-disc list-inside mt-2 text-gray-700">
<li>Orders can be cancelled within <strong>24 hours</strong> of placing them if they have not been processed or shipped.</li>
<li>Once an order is dispatched, it cannot be cancelled.</li>
</ul>
</div>


<div>
<h2 className="text-lg font-medium">Refunds</h2>
<p className="mt-2">Eligible refunds will be processed within <strong>5–7 business days</strong> after product return or cancellation confirmation and will be credited to your original payment method.</p>
<p className="mt-2">If you experience delays, please check with your bank or payment provider — sometimes it takes extra time to appear on your statement.</p>
</div>


<div>
<h2 className="text-lg font-medium">Non-Refundable Items</h2>
<p className="mt-2">Custom, personalized, or digital items are non-refundable once delivered or downloaded. Promotional or clearance items are final sale.</p>
</div>


<div>
<h2 className="text-lg font-medium">How to Request a Refund</h2>
<p className="mt-2">Email us at <a href={`mailto:${constants.SUPPORT_EMAIL}`} className="text-indigo-600 hover:underline">{constants.SUPPORT_EMAIL}</a> with your order number and reason for refund. Our team will respond within 48 hours.</p>
</div>
</section>
</main>
);
}