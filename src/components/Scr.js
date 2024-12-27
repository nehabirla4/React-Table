import React from 'react'

function Scr() {
    let src={
        "resourceType": "Bundle",
        "id": "16520C33-13A7-44C6-BA38-19CBD1B8A2E9",
        "identifier": {
            "system": "https://tools.ietf.org/html/rfc4122",
            "value": "AFDDAECF-28A9-11EF-A13E-067A0214CA1A"
        },
        "type": "searchset",
        "timestamp": "2024-06-12T16:21:14+05:30",
        "total": 48,
        "entry": [
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Composition/BF4180FD-C403-4EF7-A4AB-E07303AF5477",
                "resource": {
                    "resourceType": "Composition",
                    "id": "BF4180FD-C403-4EF7-A4AB-E07303AF5477",
                    "meta": {
                        "lastUpdated": "2020-11-17T06:30:00+05:30",
                        "profile": null
                    },
                    "identifier": {
                        "system": "https://tools.ietf.org/html/rfc4122",
                        "value": "BF4180FD-C403-4EF7-A4AB-E07303AF5477"
                    },
                    "status": "final",
                    "type": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "196981000000101",
                                "display": "General Practice Summary"
                            }
                        ]
                    },
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "163171000000105",
                                    "display": "Care Professional Documentation"
                                }
                            ]
                        }
                    ],
                    "subject": {
                        "reference": "Patient/AE0FDDE7-8526-48BF-997F-729E7C03BF44"
                    },
                    "date": "2020-11-17T06:30:00+05:30",
                    "author": [
                        {
                            "reference": "PractitionerRole/59A873CA-4916-4FA5-B05A-9F19CE3144FE"
                        }
                    ],
                    "relatesTo": [
                        {
                            "code": "replaces",
                            "targetIdentifier": {
                                "value": "D18B57ED-992E-45A2-A6AF-55200D20F48E"
                            }
                        }
                    ],
                    "section": [
                        {
                            "title": "General Practice Summary",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "Title",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h3 id=\"Disclaimer\">Sourced from the patient's General Practice record. This summary may not include all the information pertinent to this patient.</h3><p id=\"CreateTime\">Summary Created: 14-May-2020 14:31</p><p id=\"RegistrationStartedStatement\" class=\"HighlightedStatement\">At the time this record was created, this patient had recently registered with the GP Practice. GP Summary information may not be complete.</p><p id=\"Author\">Created by: SMITH, Sean (Mr)</p><p id=\"Practice\">EMISWebCR1 50004, Fulford Grange, Rawdon, Leeds, West Yorkshire, LS19 7BY.</p></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Allergies and Adverse Reactions",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "AllergiesHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table summary=\"This table includes information about this patient's allergies and adverse reactions.\" id=\"Allergies\"><thead><tr><th>Date</th><th>Description</th><th>Certainty</th><th>Severity123</th><th>Supporting Information</th></tr></thead><tbody><tr class=\"oddRow\"><td>12-May-2020</td><td>Toxic reaction to wasp sting</td><td></td><td></td><td>Problem; First</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Acute Medications (For the 12 month period 14-May-2019 to 14-May-2020)",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "AcuteMedsHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table summary=\"This table includes information about this patient's acute medications.\" id=\"AcuteMeds\"><thead><tr><th>Type</th><th>Date</th><th>Medication Item</th><th>Dosage Instructions</th><th>Quantity</th></tr></thead><tbody><tr class=\"oddRow\"><td>Acute Medication</td><td>Prescribed: 12-May-2020</td><td>Co-codamol 8mg/500mg effervescent tablets</td><td>One To Be Taken Four Times A Day</td><td>112 tablet</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Current Repeat Medications",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "RepeatMedsHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table summary=\"This table includes information about this patient's current repeat medications.\" id=\"RepeatMeds\"><thead><tr><th>Type</th><th>Date</th><th>Medication Item</th><th>Dosage Instructions</th><th>Quantity</th></tr></thead><tbody><tr class=\"oddRow\"><td>Repeat Medication</td><td>Last Issued: 12-May-2020</td><td>Paracetamol 250mg/5ml oral suspension</td><td>One 5ml Spoonful Every 4 To 6 Hours When Necessary. No More Than 4 doses in 24 Hours</td><td>40 ml</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Discontinued Repeat Medications (For the 6 month period 14-Nov-2019 to 14-May-2020)",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "DiscRepeatMedsHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table summary=\"This table includes information about this patient's discontinued repeat medications.\" id=\"DiscRepeatMeds\"><thead><tr><th>Type</th><th>Date</th><th>Medication Item</th><th>Dosage Instructions</th><th>Quantity</th></tr></thead><tbody><tr><td colspan=\"5\">No relevant information available for this category.</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Risks to Patient",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "RisksToPatientHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"RisksToPatient\"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class=\"oddRow\"><td>14-May-2020</td><td>Low risk category for developing complication from COVID-19 infection</td><td>Problem; Review</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Diagnoses",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "DiagnosesHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"Diagnoses\"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class=\"oddRow\"><td>13-May-2020</td><td>COVID-19 confirmed by laboratory test</td><td>Problem; First, test</td></tr></tbody></table></div>"
                            },
                            "entry": [
                                {
                                    "fullUrl": null,
                                    "resource": null,
                                    "reference": "Condition/FCB84E15-02E5-495C-B334-D0685DCB0687"
                                },
                                {
                                    "fullUrl": null,
                                    "resource": null,
                                    "reference": "Condition/0F582D97-8F89-11EA-8B2D-B741F13EFC47"
                                },
                                {
                                    "fullUrl": null,
                                    "resource": null,
                                    "reference": "Condition/958E584C-25B8-4BD7-A71D-7625FDC1ACD6"
                                },
                                {
                                    "fullUrl": null,
                                    "resource": null,
                                    "reference": "Condition/8CEB2867-551B-43D0-88B5-3278DA20A6B0"
                                },
                                {
                                    "fullUrl": null,
                                    "resource": null,
                                    "reference": "Condition/6ECDAE6D-32AB-421C-AA8F-0B1ABA454C70"
                                }
                            ]
                        },
                        {
                            "title": "Problems and Issues",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "ProblemsHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"Problems\"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class=\"oddRow\"><td>14-May-2020</td><td>2019-nCoV (novel coronavirus) detected</td><td>Significant Active</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Clinical Observations and Findings",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "ObservationsHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"Observations\"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class=\"oddRow\"><td>14-May-2020</td><td>2019-nCoV (novel coronavirus) detected</td><td>Problem; New</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Treatments",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "TreatmentsHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"Treatments\"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class=\"oddRow\"><td>13-May-2020</td><td>2019-nCoV (novel coronavirus) vaccination</td><td>Problem; First, Manufacturer: jh, Expiry Date: 29-May-2020, Batch Number: 2, GMS: GMS, Injection site: Left arm, test</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Investigation Results",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "ResultsHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"Results\"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class=\"oddRow\"><td>13-May-2020</td><td>Assessment using COVID-19 severity scale</td><td>Problem; First, test</td></tr></tbody></table></div>"
                            },
                            "entry": [
                                {
                                    "fullUrl": null,
                                    "resource": null,
                                    "reference": "Observation/F17999D2-FFE7-4CA4-8CE8-52CB45FF6F49"
                                },
                                {
                                    "fullUrl": null,
                                    "resource": null,
                                    "reference": "Observation/EE608FAA-2433-4BAD-A0D5-4A10E45AB2B0"
                                },
                                {
                                    "fullUrl": null,
                                    "resource": null,
                                    "reference": "Observation/0F582D97-8F89-11CA-8B2D-B741F13EFC47"
                                }
                            ]
                        },
                        {
                            "title": "Care Events",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "EventsHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"Events\"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class=\"oddRow\"><td>13-May-2020</td><td>Did not attend 2019-nCoV (novel coronavirus) vaccination</td><td>Problem; First, test</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Administrative Procedures",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "ProceduresHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"Procedures\"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class=\"oddRow\"><td>14-May-2020</td><td>Household isolation note issued to patient</td><td>Test</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Provision of Advice and Information to Patients and Carers",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "AdviceHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"Advice\"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class=\"oddRow\"><td>13-May-2020</td><td>Advice given about SARS-CoV-2 (severe acute respiratory syndrome coronavirus 2) by telephone</td><td>Problem; First, test</td></tr></tbody></table></div>"
                            },
                            "entry": null
                        },
                        {
                            "title": "Personal Preferences",
                            "code": {
                                "coding": [
                                    {
                                        "system": null,
                                        "code": "PreferencesHeader",
                                        "display": null
                                    }
                                ]
                            },
                            "text": {
                                "status": "generated",
                                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table id=\"Preferences\"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class=\"oddRow\"><td>13-May-2020</td><td>2019-nCoV (novel coronavirus) vaccination declined</td><td>Problem; First, test</td></tr></tbody></table><p id=\"SendTime\">Summary Sent: 14-May-2020 14:31</p></div>"
                            },
                            "entry": null
                        }
                    ],
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/59A873CA-4916-4FA5-B05A-9F19CE3144FE",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "59A873CA-4916-4FA5-B05A-9F19CE3144FE",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "http://fhir.nhs.net/Id/sds-role-profile-id",
                            "value": "673836492727"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": {
                        "reference": "Practitioner/C5E71493-13EE-44A7-B37D-A67DB34A6C07"
                    },
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/C5E71493-13EE-44A7-B37D-A67DB34A6C07",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "C5E71493-13EE-44A7-B37D-A67DB34A6C07",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "https://fhir.nhs.uk/Id/sds-user-id",
                            "value": "676789689789"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": [
                        {
                            "text": "Dr Steve Jones"
                        }
                    ],
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Condition/FCB84E15-02E5-495C-B334-D0685DCB0687",
                "resource": {
                    "resourceType": "Condition",
                    "id": "FCB84E15-02E5-495C-B334-D0685DCB0687",
                    "meta": null,
                    "identifier": [
                        {
                            "value": "FCB84E15-02E5-495C-B334-D0685DCB0687"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "163001000000103",
                                    "display": "Diagnoses"
                                }
                            ]
                        }
                    ],
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/ValueSet/condition-clinical",
                                "code": "active",
                                "display": "Active"
                            }
                        ]
                    },
                    "code": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "1240751000000100",
                                "display": "COVID-19"
                            }
                        ]
                    },
                    "encounter": {
                        "reference": "Encounter/E34CDF9C-E420-4995-B2E1-27FD33123457"
                    },
                    "onsetDateTime": "2020-05-06T19:18:19+05:30",
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/F22079A2-B607-4379-A45B-E6F50B95D8DA",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "F22079A2-B607-4379-A45B-E6F50B95D8DA",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "http://fhir.nhs.net/Id/sds-role-profile-id",
                            "value": "673836492727"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": {
                        "reference": "Practitioner/9337EB4D-ECF3-44A4-B1A9-E2D71D9FD809"
                    },
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/9337EB4D-ECF3-44A4-B1A9-E2D71D9FD809",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "9337EB4D-ECF3-44A4-B1A9-E2D71D9FD809",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "https://fhir.nhs.uk/Id/sds-user-id",
                            "value": "676789689789"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": [
                        {
                            "text": "Dr Steve Jones"
                        }
                    ],
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/E34CDF9C-E420-4995-B2E1-27FD33123457",
                "resource": {
                    "resourceType": "Encounter",
                    "id": "E34CDF9C-E420-4995-B2E1-27FD33123457",
                    "meta": null,
                    "identifier": null,
                    "status": "finished",
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                        "code": "UNK",
                        "display": "Unknown"
                    },
                    "participant": [
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "AUT",
                                            "display": "author"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2020-11-17T06:30:00+05:30"
                            },
                            "individual": {
                                "reference": "PractitionerRole/F22079A2-B607-4379-A45B-E6F50B95D8DA"
                            },
                            "extension": null
                        }
                    ],
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Condition/0F582D97-8F89-11EA-8B2D-B741F13EFC47",
                "resource": {
                    "resourceType": "Condition",
                    "id": "0F582D97-8F89-11EA-8B2D-B741F13EFC47",
                    "meta": null,
                    "identifier": [
                        {
                            "value": "0F582D97-8F89-11EA-8B2D-B741F13EFC47"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "163001000000103",
                                    "display": "Diagnoses"
                                }
                            ]
                        }
                    ],
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/ValueSet/condition-clinical",
                                "code": "active",
                                "display": "Active"
                            }
                        ]
                    },
                    "code": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "1300721000000109",
                                "display": "COVID-19 confirmed by laboratory test"
                            }
                        ]
                    },
                    "encounter": {
                        "reference": "Encounter/771FC06E-8126-44F8-ABA5-7B6753664749"
                    },
                    "onsetDateTime": "2020-05-06T19:18:19+05:30",
                    "class": null,
                    "participant": null,
                    "evidence": [
                        {
                            "detail": [
                                {
                                    "reference": "Observation/F17999D2-FFE7-4CA4-8CE8-52CB45FF6F49"
                                }
                            ]
                        }
                    ],
                    "note": [
                        {
                            "text": "Problem; First, test"
                        }
                    ],
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/254865F5-A2BF-4F1C-A85C-9BAAB1C7FEC3",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "254865F5-A2BF-4F1C-A85C-9BAAB1C7FEC3",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": [
                        {
                            "text": "BLOGGS Fred"
                        }
                    ],
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/1B5971E4-0AE3-4CAE-B279-4D8FE0B41640",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "1B5971E4-0AE3-4CAE-B279-4D8FE0B41640",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": {
                        "reference": "Practitioner/254865F5-A2BF-4F1C-A85C-9BAAB1C7FEC3"
                    },
                    "name": null,
                    "clinicalStatus": null,
                    "code": [
                        {
                            "coding": [
                                {
                                    "system": "https://fhir.nhs.uk/CodeSystem/HL7v3-SDSJobRoleName",
                                    "code": "R0050",
                                    "display": "Consultant"
                                }
                            ]
                        }
                    ],
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": {
                        "reference": "Organization/BB45D86F-41C7-43AD-9872-37C356A6EAE0"
                    },
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/BB45D86F-41C7-43AD-9872-37C356A6EAE0",
                "resource": {
                    "resourceType": "Organization",
                    "id": "BB45D86F-41C7-43AD-9872-37C356A6EAE0",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": [
                        {
                            "system": "phone",
                            "value": "0177865579"
                        },
                        {
                            "system": "phone",
                            "value": "0189834144"
                        }
                    ],
                    "address": [
                        {
                            "text": "ORG ADDRESS"
                        }
                    ],
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/771FC06E-8126-44F8-ABA5-7B6753664749",
                "resource": {
                    "resourceType": "Encounter",
                    "id": "771FC06E-8126-44F8-ABA5-7B6753664749",
                    "meta": null,
                    "identifier": null,
                    "status": "finished",
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                        "code": "UNK",
                        "display": "Unknown"
                    },
                    "participant": [
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "AUT",
                                            "display": "author"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2020-11-18T06:30:00+05:30"
                            },
                            "individual": {
                                "reference": "PractitionerRole/1B5971E4-0AE3-4CAE-B279-4D8FE0B41640"
                            },
                            "extension": null
                        }
                    ],
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Condition/958E584C-25B8-4BD7-A71D-7625FDC1ACD6",
                "resource": {
                    "resourceType": "Condition",
                    "id": "958E584C-25B8-4BD7-A71D-7625FDC1ACD6",
                    "meta": null,
                    "identifier": [
                        {
                            "value": "958E584C-25B8-4BD7-A71D-7625FDC1ACD6"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "163001000000103",
                                    "display": "Diagnoses"
                                }
                            ]
                        }
                    ],
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/ValueSet/condition-clinical",
                                "code": "active",
                                "display": "Active"
                            }
                        ]
                    },
                    "code": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "1300731000000106",
                                "display": "COVID-19 confirmed using clinical diagnostic criteria"
                            }
                        ]
                    },
                    "encounter": {
                        "reference": "Encounter/0969D75D-9E13-45D0-953B-DEF395F0BEC8"
                    },
                    "onsetDateTime": "2020-05-06T19:18:19+05:30",
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/023872F8-9636-45C1-B2DD-29A7C617EA79",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "023872F8-9636-45C1-B2DD-29A7C617EA79",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": [
                        {
                            "text": "William Jones"
                        }
                    ],
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/C3F534A9-BDA8-4F6C-BF44-E799A0DEC6FC",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "C3F534A9-BDA8-4F6C-BF44-E799A0DEC6FC",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": {
                        "reference": "Practitioner/023872F8-9636-45C1-B2DD-29A7C617EA79"
                    },
                    "name": null,
                    "clinicalStatus": null,
                    "code": [
                        {
                            "coding": [
                                {
                                    "system": "https://fhir.nhs.uk/CodeSystem/HL7v3-SDSJobRoleName",
                                    "code": "R0010",
                                    "display": "Medical Director"
                                }
                            ]
                        }
                    ],
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": {
                        "reference": "Organization/44E239D7-2D8A-4586-8834-02C319ECE9F2"
                    },
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/44E239D7-2D8A-4586-8834-02C319ECE9F2",
                "resource": {
                    "resourceType": "Organization",
                    "id": "44E239D7-2D8A-4586-8834-02C319ECE9F2",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": [
                        {
                            "coding": [
                                {
                                    "code": "021"
                                }
                            ]
                        }
                    ],
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": "Good Health Hospital",
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": [
                        {
                            "system": "phone",
                            "value": "0122865579"
                        },
                        {
                            "system": "phone",
                            "value": "0189664144"
                        }
                    ],
                    "address": [
                        {
                            "text": "ORG ADDRESS_2"
                        }
                    ],
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/114AE393-4895-4FC7-BBD7-B86FF8C69571",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "114AE393-4895-4FC7-BBD7-B86FF8C69571",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "http://fhir.nhs.net/Id/sds-role-profile-id",
                            "value": "578934433"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": {
                        "reference": "Practitioner/B10B79EC-6697-4DB1-8DDC-D669D7E10154"
                    },
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/B10B79EC-6697-4DB1-8DDC-D669D7E10154",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "B10B79EC-6697-4DB1-8DDC-D669D7E10154",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "https://fhir.nhs.uk/Id/sds-user-id",
                            "value": "9054354543"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": [
                        {
                            "text": "Anna Maria"
                        }
                    ],
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/0969D75D-9E13-45D0-953B-DEF395F0BEC8",
                "resource": {
                    "resourceType": "Encounter",
                    "id": "0969D75D-9E13-45D0-953B-DEF395F0BEC8",
                    "meta": null,
                    "identifier": null,
                    "status": "finished",
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                        "code": "UNK",
                        "display": "Unknown"
                    },
                    "participant": [
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "AUT",
                                            "display": "author"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2020-12-18T06:30:00+05:30"
                            },
                            "individual": {
                                "reference": "PractitionerRole/C3F534A9-BDA8-4F6C-BF44-E799A0DEC6FC"
                            },
                            "extension": null
                        },
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "INF",
                                            "display": "informant"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2016-06-30T17:03:58+05:30"
                            },
                            "individual": {
                                "reference": "PractitionerRole/114AE393-4895-4FC7-BBD7-B86FF8C69571"
                            },
                            "extension": null
                        }
                    ],
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Condition/8CEB2867-551B-43D0-88B5-3278DA20A6B0",
                "resource": {
                    "resourceType": "Condition",
                    "id": "8CEB2867-551B-43D0-88B5-3278DA20A6B0",
                    "meta": null,
                    "identifier": [
                        {
                            "value": "8CEB2867-551B-43D0-88B5-3278DA20A6B0"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "163001000000103",
                                    "display": "Diagnoses"
                                }
                            ]
                        }
                    ],
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/ValueSet/condition-clinical",
                                "code": "active",
                                "display": "Active"
                            }
                        ]
                    },
                    "code": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "1240761000000102",
                                "display": "Suspected COVID-19"
                            }
                        ]
                    },
                    "encounter": {
                        "reference": "Encounter/10E1CB72-E326-404D-B507-DDC24F6DAE5B"
                    },
                    "onsetDateTime": "2020-05-06T19:18:19+05:30",
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/58ADB6C0-D895-4570-970D-231E0076B3AB",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "58ADB6C0-D895-4570-970D-231E0076B3AB",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": [
                        {
                            "text": "Stephan Spence"
                        }
                    ],
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/8DE8AB86-7BD9-40AD-9785-1B1D4D3C64CE",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "8DE8AB86-7BD9-40AD-9785-1B1D4D3C64CE",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": {
                        "reference": "Practitioner/58ADB6C0-D895-4570-970D-231E0076B3AB"
                    },
                    "name": null,
                    "clinicalStatus": null,
                    "code": [
                        {
                            "coding": [
                                {
                                    "system": "https://fhir.nhs.uk/CodeSystem/HL7v3-SDSJobRoleName",
                                    "code": "R0020",
                                    "display": "Clinical Director - Medical"
                                }
                            ]
                        }
                    ],
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": {
                        "reference": "Organization/92DB35C1-3934-4432-8A09-7AB3B93F05F3"
                    },
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/92DB35C1-3934-4432-8A09-7AB3B93F05F3",
                "resource": {
                    "resourceType": "Organization",
                    "id": "92DB35C1-3934-4432-8A09-7AB3B93F05F3",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "https://fhir.nhs.uk/Id/ods-organization-code",
                            "value": "57435939053"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": "Good Health Hospital 2",
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": [
                        {
                            "system": "phone",
                            "value": "0122865579"
                        },
                        {
                            "system": "phone",
                            "value": "0189664144"
                        }
                    ],
                    "address": [
                        {
                            "text": "ORG ADDRESS_2"
                        }
                    ],
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/RelatedPerson/7B214C93-BCF5-451B-A271-5450F6A34B3D",
                "resource": {
                    "resourceType": "RelatedPerson",
                    "id": "7B214C93-BCF5-451B-A271-5450F6A34B3D",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": [
                        {
                            "text": "JONES Bob"
                        }
                    ],
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": {
                        "reference": "Patient/AE0FDDE7-8526-48BF-997F-729E7C03BF44"
                    },
                    "relationship": [
                        {
                            "coding": [
                                {
                                    "system": "https://fhir.nhs.uk/STU3/ValueSet/PersonRelationshipType-1",
                                    "code": "01",
                                    "display": "Brother"
                                }
                            ]
                        }
                    ],
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/10E1CB72-E326-404D-B507-DDC24F6DAE5B",
                "resource": {
                    "resourceType": "Encounter",
                    "id": "10E1CB72-E326-404D-B507-DDC24F6DAE5B",
                    "meta": null,
                    "identifier": null,
                    "status": "finished",
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                        "code": "UNK",
                        "display": "Unknown"
                    },
                    "participant": [
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "AUT",
                                            "display": "author"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2020-12-18T06:30:00+05:30"
                            },
                            "individual": {
                                "reference": "PractitionerRole/8DE8AB86-7BD9-40AD-9785-1B1D4D3C64CE"
                            },
                            "extension": null
                        },
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "INF",
                                            "display": "informant"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2016-06-30T17:03:58+05:30"
                            },
                            "individual": {
                                "reference": "RelatedPerson/7B214C93-BCF5-451B-A271-5450F6A34B3D"
                            },
                            "extension": null
                        }
                    ],
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Condition/6ECDAE6D-32AB-421C-AA8F-0B1ABA454C70",
                "resource": {
                    "resourceType": "Condition",
                    "id": "6ECDAE6D-32AB-421C-AA8F-0B1ABA454C70",
                    "meta": null,
                    "identifier": [
                        {
                            "value": "6ECDAE6D-32AB-421C-AA8F-0B1ABA454C70"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "163001000000103",
                                    "display": "Diagnoses"
                                }
                            ]
                        }
                    ],
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/ValueSet/condition-clinical",
                                "code": "active",
                                "display": "Active"
                            }
                        ]
                    },
                    "code": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "1240761000000102",
                                "display": "Suspected COVID-19"
                            }
                        ]
                    },
                    "encounter": {
                        "reference": "Encounter/1D31FFBF-2448-45CA-BDD4-FC2790CA21A9"
                    },
                    "onsetDateTime": "2020-05-06T19:18:19+05:30",
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/EA945DB4-0AAB-4838-A879-F64D7849A1A6",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "EA945DB4-0AAB-4838-A879-F64D7849A1A6",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": [
                        {
                            "text": "Gregory House"
                        }
                    ],
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/7B010843-A8A2-489E-B6D2-91D5C965DA34",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "7B010843-A8A2-489E-B6D2-91D5C965DA34",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": {
                        "reference": "Practitioner/EA945DB4-0AAB-4838-A879-F64D7849A1A6"
                    },
                    "name": null,
                    "clinicalStatus": null,
                    "code": [
                        {
                            "coding": [
                                {
                                    "system": "https://fhir.nhs.uk/CodeSystem/HL7v3-SDSJobRoleName",
                                    "code": "R0080",
                                    "display": "Staff Grade"
                                }
                            ]
                        }
                    ],
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": {
                        "reference": "Organization/57162367-0298-425E-BC8E-9D503C6B660F"
                    },
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/57162367-0298-425E-BC8E-9D503C6B660F",
                "resource": {
                    "resourceType": "Organization",
                    "id": "57162367-0298-425E-BC8E-9D503C6B660F",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": [
                        {
                            "system": "phone",
                            "value": "0332865579"
                        }
                    ],
                    "address": [
                        {
                            "text": "ORG ADDRESS_4"
                        }
                    ],
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/82831142-6B97-46EB-89D8-3EF32D96DF4A",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "82831142-6B97-46EB-89D8-3EF32D96DF4A",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": [
                        {
                            "text": "Thomas Moore"
                        }
                    ],
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/4B08055F-E235-4FA6-99F6-F6F103005ABD",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "4B08055F-E235-4FA6-99F6-F6F103005ABD",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": {
                        "reference": "Practitioner/82831142-6B97-46EB-89D8-3EF32D96DF4A"
                    },
                    "name": null,
                    "clinicalStatus": null,
                    "code": [
                        {
                            "coding": [
                                {
                                    "system": "https://fhir.nhs.uk/CodeSystem/HL7v3-SDSJobRoleName",
                                    "code": "R0100",
                                    "display": "Clinical Assistant"
                                }
                            ]
                        }
                    ],
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": {
                        "reference": "Organization/982F8376-30D5-4F39-81AF-B0F1A3FF27CA"
                    },
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/982F8376-30D5-4F39-81AF-B0F1A3FF27CA",
                "resource": {
                    "resourceType": "Organization",
                    "id": "982F8376-30D5-4F39-81AF-B0F1A3FF27CA",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": [
                        {
                            "system": "phone",
                            "value": "573459834"
                        }
                    ],
                    "address": [
                        {
                            "text": "ORG ADDRESS_4"
                        }
                    ],
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/1D31FFBF-2448-45CA-BDD4-FC2790CA21A9",
                "resource": {
                    "resourceType": "Encounter",
                    "id": "1D31FFBF-2448-45CA-BDD4-FC2790CA21A9",
                    "meta": null,
                    "identifier": null,
                    "status": "finished",
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                        "code": "UNK",
                        "display": "Unknown"
                    },
                    "participant": [
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "AUT",
                                            "display": "author"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2020-12-18T06:30:00+05:30"
                            },
                            "individual": {
                                "reference": "PractitionerRole/7B010843-A8A2-489E-B6D2-91D5C965DA34"
                            },
                            "extension": null
                        },
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "INF",
                                            "display": "informant"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2016-06-30T17:03:58+05:30"
                            },
                            "individual": {
                                "reference": "PractitionerRole/4B08055F-E235-4FA6-99F6-F6F103005ABD"
                            },
                            "extension": null
                        }
                    ],
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/76D702AD-CFD8-42FE-A530-F61F2092B7AE",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "76D702AD-CFD8-42FE-A530-F61F2092B7AE",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "http://fhir.nhs.net/Id/sds-role-profile-id",
                            "value": "89823498234"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": {
                        "reference": "Practitioner/C9FFBFBB-F806-4689-AE06-A0DD81FE0B0B"
                    },
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/C9FFBFBB-F806-4689-AE06-A0DD81FE0B0B",
                "resource": {
                    "resourceType": "Practitioner",
                    "id": "C9FFBFBB-F806-4689-AE06-A0DD81FE0B0B",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "https://fhir.nhs.uk/Id/sds-user-id",
                            "value": "9699575667"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": [
                        {
                            "text": "Maria Smith"
                        }
                    ],
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/8F64A782-E97E-4CB0-82D7-9287407EEA90",
                "resource": {
                    "resourceType": "Encounter",
                    "id": "8F64A782-E97E-4CB0-82D7-9287407EEA90",
                    "meta": null,
                    "identifier": null,
                    "status": "finished",
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                        "code": "UNK",
                        "display": "Unknown"
                    },
                    "participant": [
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "PRF",
                                            "display": "performer"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2016-06-30T17:03:58+05:30"
                            },
                            "individual": {
                                "reference": "PractitionerRole/76D702AD-CFD8-42FE-A530-F61F2092B7AE"
                            },
                            "extension": [
                                {
                                    "url": "https://fhir.nhs.uk/StructureDefinition/Extension-SCR-ModeCode",
                                    "valueCodeableConcept": {
                                        "coding": [
                                            {
                                                "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
                                                "code": "PHYSICAL",
                                                "display": "physical presence"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ],
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Observation/F17999D2-FFE7-4CA4-8CE8-52CB45FF6F49",
                "resource": {
                    "resourceType": "Observation",
                    "id": "F17999D2-FFE7-4CA4-8CE8-52CB45FF6F49",
                    "meta": {
                        "lastUpdated": "0001-01-01T00:00:00",
                        "profile": [
                            "https://fhir.hl7.org.uk/StructureDefinition/UKCore-Observation"
                        ]
                    },
                    "identifier": [
                        {
                            "value": "F17999D2-FFE7-4CA4-8CE8-52CB45FF6F49"
                        }
                    ],
                    "status": "final",
                    "type": null,
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "163141000000104",
                                    "display": "Investigation Results"
                                }
                            ]
                        }
                    ],
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "1240581000000104",
                                "display": "SARS-CoV-2 (severe acute respiratory syndrome coronavirus 2) RNA (ribonucleic acid) detection result positive"
                            }
                        ]
                    },
                    "encounter": {
                        "reference": "Encounter/8F64A782-E97E-4CB0-82D7-9287407EEA90"
                    },
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": {
                        "start": "2020-05-06T19:18:19+05:30"
                    },
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Device/CDCDB478-B668-450B-BD2E-90819A7AA554",
                "resource": {
                    "resourceType": "Device",
                    "id": "CDCDB478-B668-450B-BD2E-90819A7AA554",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "https://fhir.nhs.uk/Id/SDSDevice",
                            "value": "930484003023"
                        },
                        {
                            "value": "930484003023"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": {
                        "reference": "Organization/1B412FB8-0CD8-4F5F-83AA-534B5AB845AE"
                    },
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/1B412FB8-0CD8-4F5F-83AA-534B5AB845AE",
                "resource": {
                    "resourceType": "Organization",
                    "id": "1B412FB8-0CD8-4F5F-83AA-534B5AB845AE",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "https://fhir.nhs.uk/Id/ods-organization-code",
                            "value": "7635043534"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/47FE6E7E-D92A-4575-9C88-B5B6A6B8DD24",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "47FE6E7E-D92A-4575-9C88-B5B6A6B8DD24",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": {
                        "reference": "Organization/1B412FB8-0CD8-4F5F-83AA-534B5AB845AE"
                    },
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/1F39BAF4-CFD5-4066-98D5-1CD4403D02B3",
                "resource": {
                    "resourceType": "Encounter",
                    "id": "1F39BAF4-CFD5-4066-98D5-1CD4403D02B3",
                    "meta": null,
                    "identifier": null,
                    "status": "finished",
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                        "code": "UNK",
                        "display": "Unknown"
                    },
                    "participant": [
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "AUT",
                                            "display": "author"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2016-06-30T17:03:58+05:30"
                            },
                            "individual": {
                                "reference": "PractitionerRole/47FE6E7E-D92A-4575-9C88-B5B6A6B8DD24"
                            },
                            "extension": null
                        }
                    ],
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Observation/EE608FAA-2433-4BAD-A0D5-4A10E45AB2B0",
                "resource": {
                    "resourceType": "Observation",
                    "id": "EE608FAA-2433-4BAD-A0D5-4A10E45AB2B0",
                    "meta": {
                        "lastUpdated": "0001-01-01T00:00:00",
                        "profile": [
                            "https://fhir.hl7.org.uk/StructureDefinition/UKCore-Observation"
                        ]
                    },
                    "identifier": [
                        {
                            "value": "EE608FAA-2433-4BAD-A0D5-4A10E45AB2B0"
                        }
                    ],
                    "status": "final",
                    "type": null,
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "163141000000104",
                                    "display": "Investigation Results"
                                }
                            ]
                        }
                    ],
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "1240581000000104",
                                "display": "SARS-CoV-2 (severe acute respiratory syndrome coronavirus 2) RNA (ribonucleic acid) detection result positive"
                            }
                        ]
                    },
                    "encounter": {
                        "reference": "Encounter/1F39BAF4-CFD5-4066-98D5-1CD4403D02B3"
                    },
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": {
                        "start": "2020-05-06T19:18:19+05:30"
                    },
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Device/9276FFCA-8642-4D12-8DA8-A1640584C402",
                "resource": {
                    "resourceType": "Device",
                    "id": "9276FFCA-8642-4D12-8DA8-A1640584C402",
                    "meta": null,
                    "identifier": [
                        {
                            "value": "7867868687687"
                        },
                        {
                            "value": "7867868687687"
                        }
                    ],
                    "status": null,
                    "type": {
                        "coding": [
                            {
                                "code": "01",
                                "display": "Some device"
                            }
                        ]
                    },
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": [
                        {
                            "text": "Device description"
                        }
                    ],
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": {
                        "reference": "Organization/37A6E2A2-04D2-4E16-950F-BAC5FE9C2C8A"
                    },
                    "deviceName": [
                        {
                            "name": "Some device name",
                            "type": "other"
                        },
                        {
                            "name": "Mfc model name",
                            "type": "manufacturer-name"
                        }
                    ],
                    "version": [
                        {
                            "value": "v.1.10.245-beta"
                        }
                    ]
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/37A6E2A2-04D2-4E16-950F-BAC5FE9C2C8A",
                "resource": {
                    "resourceType": "Organization",
                    "id": "37A6E2A2-04D2-4E16-950F-BAC5FE9C2C8A",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": [
                        {
                            "coding": [
                                {
                                    "code": "214"
                                }
                            ]
                        }
                    ],
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": "Device owner org",
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": [
                        {
                            "system": "phone",
                            "value": "fax:01392251689"
                        }
                    ],
                    "address": [
                        {
                            "text": "ADDRESS LINE 1"
                        }
                    ],
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/6F529F67-84FF-491E-82BB-37F63F5FF8DE",
                "resource": {
                    "resourceType": "PractitionerRole",
                    "id": "6F529F67-84FF-491E-82BB-37F63F5FF8DE",
                    "meta": null,
                    "identifier": null,
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": {
                        "reference": "Organization/37A6E2A2-04D2-4E16-950F-BAC5FE9C2C8A"
                    },
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/8B3061D8-6F58-4C23-BAA4-44CCCFE905DA",
                "resource": {
                    "resourceType": "Encounter",
                    "id": "8B3061D8-6F58-4C23-BAA4-44CCCFE905DA",
                    "meta": null,
                    "identifier": null,
                    "status": "finished",
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                        "code": "UNK",
                        "display": "Unknown"
                    },
                    "participant": [
                        {
                            "type": [
                                {
                                    "coding": [
                                        {
                                            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                            "code": "AUT",
                                            "display": "author"
                                        }
                                    ]
                                }
                            ],
                            "period": {
                                "start": "2016-06-30T17:03:58+05:30"
                            },
                            "individual": {
                                "reference": "PractitionerRole/6F529F67-84FF-491E-82BB-37F63F5FF8DE"
                            },
                            "extension": null
                        }
                    ],
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Observation/0F582D97-8F89-11CA-8B2D-B741F13EFC47",
                "resource": {
                    "resourceType": "Observation",
                    "id": "0F582D97-8F89-11CA-8B2D-B741F13EFC47",
                    "meta": {
                        "lastUpdated": "0001-01-01T00:00:00",
                        "profile": [
                            "https://fhir.hl7.org.uk/StructureDefinition/UKCore-Observation"
                        ]
                    },
                    "identifier": [
                        {
                            "value": "0F582D97-8F89-11CA-8B2D-B741F13EFC47"
                        }
                    ],
                    "status": "final",
                    "type": null,
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "163141000000104",
                                    "display": "Investigation Results"
                                }
                            ]
                        }
                    ],
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "1240581000000104",
                                "display": "SARS-CoV-2 (severe acute respiratory syndrome coronavirus 2) RNA (ribonucleic acid) detection result positive"
                            }
                        ]
                    },
                    "encounter": {
                        "reference": "Encounter/8B3061D8-6F58-4C23-BAA4-44CCCFE905DA"
                    },
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": {
                        "start": "2020-05-06T19:18:19+05:30"
                    },
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            },
            {
                "fullUrl": "https://int.api.service.nhs.uk/summary-care-record/FHIR/R4/Patient/AE0FDDE7-8526-48BF-997F-729E7C03BF44",
                "resource": {
                    "resourceType": "Patient",
                    "id": "AE0FDDE7-8526-48BF-997F-729E7C03BF44",
                    "meta": null,
                    "identifier": [
                        {
                            "system": "https://fhir.nhs.uk/Id/nhs-number",
                            "value": "9728338600"
                        }
                    ],
                    "status": null,
                    "type": null,
                    "category": null,
                    "subject": null,
                    "date": "0001-01-01T00:00:00",
                    "author": null,
                    "relatesTo": null,
                    "section": null,
                    "practitioner": null,
                    "name": null,
                    "clinicalStatus": null,
                    "code": null,
                    "encounter": null,
                    "onsetDateTime": null,
                    "class": null,
                    "participant": null,
                    "evidence": null,
                    "note": null,
                    "organization": null,
                    "telecom": null,
                    "address": null,
                    "patient": null,
                    "relationship": null,
                    "effectivePeriod": null,
                    "owner": null,
                    "deviceName": null,
                    "version": null
                },
                "reference": null
            }
        ]
    }
  return (
    <div>
    {src.entry[0]?.resource?.section?.map((data, i) => {
                return (
                    <>
                        <div className="flex bg-gray-100 m-3 mt-1 mb-6">
                            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
 
                                <div className="pt-2 p-6">
                                    <h2 className="font-bold mb-2">{data.title}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: data.text.div }} />
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
    </div>
  )
}

export default Scr
