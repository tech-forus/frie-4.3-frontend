/**
 * CompanySection component
 * Updated: No empty columns - all fields shifted to fill the grid
 */

import React from 'react';
import { UseVendorBasicsReturn, ServiceMode } from '../hooks/useVendorBasics';
import { UsePincodeLookupReturn } from '../hooks/usePincodeLookup';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

// =============================================================================
// PROPS
// =============================================================================

interface CompanySectionProps {
  vendorBasics: UseVendorBasicsReturn;
  pincodeLookup: UsePincodeLookupReturn;
  transportMode: 'road' | 'air' | 'rail' | 'ship';
  onTransportModeChange: (mode: 'road' | 'air' | 'rail' | 'ship') => void;
}

// =============================================================================
// COMPONENT
// =============================================================================

export const CompanySection: React.FC<CompanySectionProps> = ({
  vendorBasics,
  pincodeLookup,
  transportMode,
  onTransportModeChange,
}) => {
  const { basics, errors, setField, validateField } = vendorBasics;
  const {
    geo,
    isLoading,
    error: geoError,
    setPincode,
    setState,
    setCity,
    isManual,
  } = pincodeLookup;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <InformationCircleIcon className="w-5 h-5 text-blue-500" />
        Company Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Row 1: Legal Company Name | Company Name | Sub Vendor */}
        <div>
          <label
            htmlFor="legalCompanyName"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Legal Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="legalCompanyName"
            name="legalCompanyName"
            value={basics.legalCompanyName}
            onChange={(e) => setField('legalCompanyName', e.target.value.slice(0, 60))}
            onBlur={() => validateField('legalCompanyName')}
            maxLength={60}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.legalCompanyName
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="Enter legal company name"
            required
          />
          {errors.legalCompanyName && (
            <p className="mt-1 text-xs text-red-600">{errors.legalCompanyName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={basics.companyName}
            onChange={(e) => setField('companyName', e.target.value.slice(0, 30))}
            onBlur={() => validateField('companyName')}
            maxLength={30}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.companyName
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="Enter company name"
            required
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subVendor"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Sub Vendor <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subVendor"
            name="subVendor"
            value={basics.subVendor}
            onChange={(e) => setField('subVendor', e.target.value.slice(0, 20))}
            onBlur={() => validateField('subVendor')}
            maxLength={20}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.subVendor
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="Enter sub vendor"
            required
          />
          {errors.subVendor && (
            <p className="mt-1 text-xs text-red-600">{errors.subVendor}</p>
          )}
        </div>

        {/* Row 2: Vendor Code | Primary Contact Name | Primary Contact Phone */}
        <div>
          <label
            htmlFor="vendorCode"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Vendor Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="vendorCode"
            name="vendorCode"
            value={basics.vendorCode}
            onChange={(e) => {
              const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 20);
              setField('vendorCode', value);
            }}
            onBlur={() => validateField('vendorCode')}
            maxLength={20}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.vendorCode
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="Enter vendor code"
            required
          />
          {errors.vendorCode && (
            <p className="mt-1 text-xs text-red-600">{errors.vendorCode}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="primaryContactName"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Primary Contact Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="primaryContactName"
            name="primaryContactName"
            value={basics.primaryContactName}
            onChange={(e) => {
              const value = e.target.value.replace(/[^a-zA-Z\s\-']/g, '').slice(0, 25);
              setField('primaryContactName', value);
            }}
            onBlur={() => validateField('primaryContactName')}
            maxLength={25}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.primaryContactName
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="Enter primary contact name"
            required
          />
          {errors.primaryContactName && (
            <p className="mt-1 text-xs text-red-600">{errors.primaryContactName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="primaryContactPhone"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Primary Contact Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="primaryContactPhone"
            name="primaryContactPhone"
            value={basics.primaryContactPhone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 10);
              setField('primaryContactPhone', value);
            }}
            onBlur={() => validateField('primaryContactPhone')}
            inputMode="numeric"
            maxLength={10}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.primaryContactPhone
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="10-digit phone number"
            required
          />
          {errors.primaryContactPhone && (
            <p className="mt-1 text-xs text-red-600">{errors.primaryContactPhone}</p>
          )}
        </div>

        {/* Row 3: Primary Contact Email | Vendor Phone Number | Vendor Email Address */}
        <div>
          <label
            htmlFor="primaryContactEmail"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Primary Contact Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="primaryContactEmail"
            name="primaryContactEmail"
            value={basics.primaryContactEmail}
            onChange={(e) => setField('primaryContactEmail', e.target.value)}
            onBlur={() => validateField('primaryContactEmail')}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.primaryContactEmail
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="email@example.com"
            required
          />
          {errors.primaryContactEmail && (
            <p className="mt-1 text-xs text-red-600">{errors.primaryContactEmail}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="vendorPhoneNumber"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Vendor Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="vendorPhoneNumber"
            name="vendorPhoneNumber"
            value={basics.vendorPhoneNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 10);
              setField('vendorPhoneNumber', value);
            }}
            onBlur={() => validateField('vendorPhoneNumber')}
            inputMode="numeric"
            maxLength={10}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.vendorPhoneNumber
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="10-digit phone number"
            required
          />
          {errors.vendorPhoneNumber && (
            <p className="mt-1 text-xs text-red-600">{errors.vendorPhoneNumber}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="vendorEmailAddress"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Vendor Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="vendorEmailAddress"
            name="vendorEmailAddress"
            value={basics.vendorEmailAddress}
            onChange={(e) => setField('vendorEmailAddress', e.target.value)}
            onBlur={() => validateField('vendorEmailAddress')}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.vendorEmailAddress
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="email@example.com"
            required
          />
          {errors.vendorEmailAddress && (
            <p className="mt-1 text-xs text-red-600">{errors.vendorEmailAddress}</p>
          )}
        </div>

        {/* Row 4: GST No. | Pincode (6 Digits) | State */}
        <div>
          <label
            htmlFor="gstin"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            GST No. <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="gstin"
            name="gstin"
            value={basics.gstin || ''}
            onChange={(e) => {
              const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 15);
              setField('gstin', value);
            }}
            onBlur={() => validateField('gstin')}
            maxLength={15}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.gstin
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="15-character GST number"
            required
          />
          {errors.gstin && (
            <p className="mt-1 text-xs text-red-600">{errors.gstin}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="pincode"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Pincode (6 Digits) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={geo.pincode || ''}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                setPincode(value);
              }}
              maxLength={6}
              className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                         focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                         ${
                           geoError
                             ? 'border-red-500 focus:ring-red-500'
                             : 'border-slate-300 focus:ring-blue-500'
                         }`}
              placeholder="6-digit pincode"
              required
            />
            {isLoading && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>
          {geoError && (
            <p className="mt-1 text-xs text-orange-600">{geoError}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="state"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            State <span className="text-red-500">*</span>
            {isManual && (
              <span className="text-xs text-orange-500 ml-2">(Manual)</span>
            )}
          </label>
          <select
            id="state"
            name="state"
            value={geo.state || 'Select State'}
            onChange={(e) => setState(e.target.value)}
            disabled={!isManual && !geoError}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition
                       ${
                         !isManual && !geoError
                           ? 'bg-slate-100 cursor-not-allowed'
                           : 'bg-slate-50/70'
                       }
                       border-slate-300 focus:ring-blue-500`}
            required
          >
            <option value="Select State" disabled>Select State</option>
            <option value="ANDHRA PRADESH">Andhra Pradesh</option>
            <option value="ARUNACHAL PRADESH">Arunachal Pradesh</option>
            <option value="ASSAM">Assam</option>
            <option value="BIHAR">Bihar</option>
            <option value="CHHATTISGARH">Chhattisgarh</option>
            <option value="GOA">Goa</option>
            <option value="GUJARAT">Gujarat</option>
            <option value="HARYANA">Haryana</option>
            <option value="HIMACHAL PRADESH">Himachal Pradesh</option>
            <option value="JHARKHAND">Jharkhand</option>
            <option value="KARNATAKA">Karnataka</option>
            <option value="KERALA">Kerala</option>
            <option value="MADHYA PRADESH">Madhya Pradesh</option>
            <option value="MAHARASHTRA">Maharashtra</option>
            <option value="MANIPUR">Manipur</option>
            <option value="MEGHALAYA">Meghalaya</option>
            <option value="MIZORAM">Mizoram</option>
            <option value="NAGALAND">Nagaland</option>
            <option value="ODISHA">Odisha</option>
            <option value="PUNJAB">Punjab</option>
            <option value="RAJASTHAN">Rajasthan</option>
            <option value="SIKKIM">Sikkim</option>
            <option value="TAMIL NADU">Tamil Nadu</option>
            <option value="TELANGANA">Telangana</option>
            <option value="TRIPURA">Tripura</option>
            <option value="UTTAR PRADESH">Uttar Pradesh</option>
            <option value="UTTARAKHAND">Uttarakhand</option>
            <option value="WEST BENGAL">West Bengal</option>
            <option value="DELHI">Delhi</option>
          </select>
        </div>

        {/* Row 5: City | Address (spans 2 columns) */}
        <div>
          <label
            htmlFor="city"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            City <span className="text-red-500">*</span>
            {isManual && (
              <span className="text-xs text-orange-500 ml-2">(Manual)</span>
            )}
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={geo.city || ''}
            onChange={(e) => setCity(e.target.value)}
            readOnly={!isManual && !geoError}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition
                       ${
                         !isManual && !geoError
                           ? 'bg-slate-100 cursor-not-allowed'
                           : 'bg-slate-50/70'
                       }
                       border-slate-300 focus:ring-blue-500`}
            placeholder="City (auto-filled)"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="address"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            value={basics.address}
            onChange={(e) => setField('address', e.target.value.slice(0, 150))}
            onBlur={() => validateField('address')}
            maxLength={150}
            rows={2}
            className={`mt-1 block w-full border rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 placeholder-slate-400
                       focus:outline-none focus:ring-1 focus:border-blue-500 transition bg-slate-50/70
                       ${
                         errors.address
                           ? 'border-red-500 focus:ring-red-500'
                           : 'border-slate-300 focus:ring-blue-500'
                       }`}
            placeholder="Enter complete address"
            required
          />
          {errors.address && (
            <p className="mt-1 text-xs text-red-600">{errors.address}</p>
          )}
        </div>

        {/* Row 6: Transport Mode | Service Modes (radio buttons) | Company Rating */}
        <div>
          <label
            htmlFor="transportMode"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
          >
            Transport Mode <span className="text-red-500">*</span>
          </label>
          <select
            id="transportMode"
            name="transportMode"
            value={transportMode}
            onChange={(e) => onTransportModeChange(e.target.value as 'road' | 'air' | 'rail' | 'ship')}
            className="mt-1 block w-full border border-slate-300 rounded-lg shadow-sm px-3 py-2 text-sm text-slate-800 bg-slate-50/70
                       focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="road">Road</option>
            <option value="air" disabled>Air - Coming Soon</option>
            <option value="rail" disabled>Rail - Coming Soon</option>
            <option value="ship" disabled>Ship - Coming Soon</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
            Service Modes <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-6 mt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="serviceModes"
                value="Road LTL"
                checked={basics.serviceModes === 'Road LTL'}
                onChange={(e) => setField('serviceModes', e.target.value as ServiceMode)}
                className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">Road LTL</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="serviceModes"
                value="Road FTL"
                checked={basics.serviceModes === 'Road FTL'}
                onChange={(e) => setField('serviceModes', e.target.value as ServiceMode)}
                className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">Road FTL</span>
            </label>
          </div>
          {errors.serviceModes && (
            <p className="mt-1 text-xs text-red-600">{errors.serviceModes}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyRating"
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2"
          >
            Company Rating
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              id="companyRating"
              name="companyRating"
              min="0"
              max="5"
              step="0.1"
              value={basics.companyRating}
              onChange={(e) => setField('companyRating', parseFloat(e.target.value))}
              className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <span className="text-lg font-bold text-blue-600 min-w-[60px] text-right">
              {basics.companyRating.toFixed(1)} / 5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

