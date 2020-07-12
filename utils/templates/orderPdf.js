const orderPdf = {
  header: `<html>
    <head>
      <style>
        body {
          padding: 1px;
          background: #F8F9FA;
        }
        #pageFooter{
          border-top: 1px solid #eee; 
          padding-top: 2px;
        }
        .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 18px;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            line-height: 23px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
        }
        
        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
        }
        
        .invoice-box table td {
            padding: 5px;
            vertical-align: top;
        }
        
        .invoice-box table tr td:nth-child(2) {
            text-align: right;
        }
        .invoice-box table tr td:nth-child(3) {
            text-align: right;
        }
        .invoice-box table tr td:nth-child(4) {
            text-align: right;
        }
        
        .invoice-box table tr.top table td {
            padding-bottom: 5px;
        }
        
        .invoice-box table tr.top table td.title {
            font-size: 20px !important;
            line-height: 20px;
            color: #333;
        }
        
        .invoice-box table tr.information table td {
            padding-bottom: 30px;
        }
        
        .invoice-box table tr.heading td {
            background: #0058AD;
            font-size: 12px !important;
            color: white;
        }
        .invoice-box table tr.heading.head td {
            border-bottom: 1px dotted #eee;
        }
        .invoice-box table tr.details td {
            padding-bottom: 15px;
        }
        .invoice-box table tr.item td{
            border-bottom: 1px solid #eee;
            font-size: 11px !important;
        }
        .invoice-box table tr.item.last td {
            border-bottom: none;
        }
        .invoice-box table tr.total td:nth-child(2) {
            font-weight: bold;
            font-size: 12px !important;
            padding-bottom: 15px;
        }
      </style>
    </head>
    <body>
  `,
  bodyHead:`
  <div class="invoice-box">
    <table cellpadding="0" cellspacing="0">
        <tr class="top">
            <td colspan="4">
                <table>
                    <tr>
                        <td class="title">
                          <img src="https://kairos-staging.firebaseapp.com/assets/images/brand/LogoBlue.svg" width="180">
                        </td>
                        <td>
                            Order #: {{orderId}}<br>
                            <stong>Total $: {{total}}</strong><br>
                            Created: {{orderCreated}}<br>
                            {{userName}}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
      `,
  footer: ` </table></body></html>`
}
module.exports =  orderPdf;