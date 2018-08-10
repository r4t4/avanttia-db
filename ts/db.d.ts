// tslint:disable
import * as Sequelize from 'sequelize';


// table: account_statement_notifications
export interface account_statement_notificationsAttribute {
  company_id:number;
  notifications:number;
}
export interface account_statement_notificationsInstance extends Sequelize.Instance<account_statement_notificationsAttribute>, account_statement_notificationsAttribute { }
export interface account_statement_notificationsModel extends Sequelize.Model<account_statement_notificationsInstance, account_statement_notificationsAttribute> { }

// table: accounts
export interface accountsAttribute {
  id:number;
  company_site_id?:number;
  company_id:number;
  customer_id?:number;
  bank_id?:number;
  paybook_account_id:string;
  account_id_contpaqi:number;
  name:string;
  number?:string;
  clabe:string;
  balance:number;
  foreign_bank_name:string;
  foreign_bank_rfc:string;
  dt_refresh:Date;
  disable:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface accountsInstance extends Sequelize.Instance<accountsAttribute>, accountsAttribute { }
export interface accountsModel extends Sequelize.Model<accountsInstance, accountsAttribute> { }

// table: banks
export interface banksAttribute {
  id:number;
  key:string;
  name:string;
  rfc?:string;
  extension:string;
  created_at:Date;
  updated_at:Date;
}
export interface banksInstance extends Sequelize.Instance<banksAttribute>, banksAttribute { }
export interface banksModel extends Sequelize.Model<banksInstance, banksAttribute> { }

// table: comercial_activities
export interface comercial_activitiesAttribute {
  id:number;
  economic_sector_id:number;
  name:string;
  created_at:Date;
  updated_at:Date;
}
export interface comercial_activitiesInstance extends Sequelize.Instance<comercial_activitiesAttribute>, comercial_activitiesAttribute { }
export interface comercial_activitiesModel extends Sequelize.Model<comercial_activitiesInstance, comercial_activitiesAttribute> { }

// table: companies
export interface companiesAttribute {
  id:number;
  creator_id:number;
  licence_id?:number;
  erp_id?:number;
  trade_name:string;
  rfc:string;
  ciec:string;
  firstLoad:number;
  is_demo:number;
  dt_refresh:Date;
  dt_refresh_credit_notes:Date;
  credit_days:number;
  phone:string;
  recovery:number;
  type_recovery:number;
  address:string;
  suburb?:string;
  municipality?:string;
  city:string;
  zip_code?:string;
  state:string;
  country:string;
  bank?:string;
  beneficiary?:string;
  account_bank:string;
  account_clabe:string;
  enable_stp:number;
  account_clabe_avanttia?:string;
  promise_limit?:number;
  current_folio:string;
  created_at:Date;
  updated_at:Date;
  buro_name:string;
  buro_short_name:string;
  buro_short_name_old:string;
  buro_member_code:string;
  buro_member_code_old:string;
  buro_format_type:number;
  deleted_at?:Date;
  id_paybook_user:string;
  sync_sat:number;
  id_paybook_credential:string;
  is_bank_sync_enabled:number;
  economic_sector_id?:number;
  comercial_activity_id?:number;
  notifications_limit:number;
  has_logo:number;
  filename_logo?:string;
  documents_logo?:string;
  importation_date?:Date;
  interest_percent:number;
}
export interface companiesInstance extends Sequelize.Instance<companiesAttribute>, companiesAttribute { }
export interface companiesModel extends Sequelize.Model<companiesInstance, companiesAttribute> { }

// table: banxico_exchange_rate
export interface banxico_exchange_rateAttribute {
  id:number;
  currency_code:any;
  query_date:Date;
  exchange_rate:number;
}
export interface banxico_exchange_rateInstance extends Sequelize.Instance<banxico_exchange_rateAttribute>, banxico_exchange_rateAttribute { }
export interface banxico_exchange_rateModel extends Sequelize.Model<banxico_exchange_rateInstance, banxico_exchange_rateAttribute> { }

// table: collection_policies
export interface collection_policiesAttribute {
  id:number;
  receivable_id:number;
  payment:number;
  number_payments:number;
  date:Date;
  amount:any;
  days:string;
  credit_days:number;
  status:number;
  deleted_at?:Date;
  created_at:Date;
  updated_at:Date;
}
export interface collection_policiesInstance extends Sequelize.Instance<collection_policiesAttribute>, collection_policiesAttribute { }
export interface collection_policiesModel extends Sequelize.Model<collection_policiesInstance, collection_policiesAttribute> { }

// table: company_payments
export interface company_paymentsAttribute {
  company_id?:number;
  payments_applied:number;
}
export interface company_paymentsInstance extends Sequelize.Instance<company_paymentsAttribute>, company_paymentsAttribute { }
export interface company_paymentsModel extends Sequelize.Model<company_paymentsInstance, company_paymentsAttribute> { }

// table: company_site
export interface company_siteAttribute {
  id:number;
  company_id:number;
  site_id:number;
  credentials:string;
  dt_refresh:Date;
  type_sync:number;
  created_at:Date;
  updated_at:Date;
}
export interface company_siteInstance extends Sequelize.Instance<company_siteAttribute>, company_siteAttribute { }
export interface company_siteModel extends Sequelize.Model<company_siteInstance, company_siteAttribute> { }

// table: company_intercom_data
export interface company_intercom_dataAttribute {
  company_id:number;
  sinresgistro_bit:number;
  clientes_sasignar:number;
  edo_cuenta:number;
  plantillas:number;
  prom_pago:number;
  reglas:number;
  cred_prom:number;
  pago_prom:number;
  rel_fac_edo:number;
  pagos_aplicados:number;
  rel_cred_pago:number;
}
export interface company_intercom_dataInstance extends Sequelize.Instance<company_intercom_dataAttribute>, company_intercom_dataAttribute { }
export interface company_intercom_dataModel extends Sequelize.Model<company_intercom_dataInstance, company_intercom_dataAttribute> { }

// table: contact_phone
export interface contact_phoneAttribute {
  id:number;
  contact_id:number;
  phone:string;
  extension:string;
  created_at:Date;
  updated_at:Date;
}
export interface contact_phoneInstance extends Sequelize.Instance<contact_phoneAttribute>, contact_phoneAttribute { }
export interface contact_phoneModel extends Sequelize.Model<contact_phoneInstance, contact_phoneAttribute> { }

// table: contacts
export interface contactsAttribute {
  id:number;
  customer_id:number;
  title:string;
  name:string;
  phone:string;
  cell_phone:string;
  email:string;
  main_contact:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface contactsInstance extends Sequelize.Instance<contactsAttribute>, contactsAttribute { }
export interface contactsModel extends Sequelize.Model<contactsInstance, contactsAttribute> { }

// table: contact_email
export interface contact_emailAttribute {
  id:number;
  contact_id:number;
  email:string;
  created_at:Date;
  updated_at:Date;
}
export interface contact_emailInstance extends Sequelize.Instance<contact_emailAttribute>, contact_emailAttribute { }
export interface contact_emailModel extends Sequelize.Model<contact_emailInstance, contact_emailAttribute> { }

// table: company_user
export interface company_userAttribute {
  id:number;
  company_id:number;
  user_id:number;
  created_at:Date;
  updated_at:Date;
}
export interface company_userInstance extends Sequelize.Instance<company_userAttribute>, company_userAttribute { }
export interface company_userModel extends Sequelize.Model<company_userInstance, company_userAttribute> { }

// table: contracts
export interface contractsAttribute {
  id:number;
  user_id:number;
  customer_id:number;
  contract:string;
  comment:string;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface contractsInstance extends Sequelize.Instance<contractsAttribute>, contractsAttribute { }
export interface contractsModel extends Sequelize.Model<contractsInstance, contractsAttribute> { }

// table: credit_days
export interface credit_daysAttribute {
  company_id:number;
  creditDays:number;
}
export interface credit_daysInstance extends Sequelize.Instance<credit_daysAttribute>, credit_daysAttribute { }
export interface credit_daysModel extends Sequelize.Model<credit_daysInstance, credit_daysAttribute> { }

// table: contpaqi_license_config_log
export interface contpaqi_license_config_logAttribute {
  id:number;
  user_id:number;
  company_id:number;
  licenses_contpaqi_id:number;
  sync_enabled:number;
  created_at:Date;
  updated_at:Date;
}
export interface contpaqi_license_config_logInstance extends Sequelize.Instance<contpaqi_license_config_logAttribute>, contpaqi_license_config_logAttribute { }
export interface contpaqi_license_config_logModel extends Sequelize.Model<contpaqi_license_config_logInstance, contpaqi_license_config_logAttribute> { }

// table: credit_report_accounts
export interface credit_report_accountsAttribute {
  id:number;
  created_at:Date;
  updated_at:Date;
  credit_report_customer_id:number;
  account:string;
  account_old:string;
  responsability_type:string;
  account_type:string;
  contract_type:string;
  currency:string;
  number_of_payments:number;
  frecuency_of_payments:string;
  payment_amount:number;
  opening_date:Date;
  last_payment_date:Date;
  last_purchase_date:Date;
  close_account_date:Date;
  cut_off_date:Date;
  maximum_credit:number;
  current_balance:number;
  credit_limit:number;
  outstanding_balance:number;
  overdue_payments:number;
  mop_payment_form:string;
  observation_key:string;
  first_non_compliance_date:Date;
  outstanding_neto_balance:number;
  last_payment_amount:number;
  term_months:number;
  original_credit_amount:number;
  last_payment_due_date:Date;
  interest:number;
  mop_payment_interest:string;
  due_days:number;
  email:string;
}
export interface credit_report_accountsInstance extends Sequelize.Instance<credit_report_accountsAttribute>, credit_report_accountsAttribute { }
export interface credit_report_accountsModel extends Sequelize.Model<credit_report_accountsInstance, credit_report_accountsAttribute> { }

// table: credit_notes
export interface credit_notesAttribute {
  id:number;
  company_id:number;
  customer_id:number;
  uuid:string;
  document_id_contpaqi:number;
  folio:string;
  serie:string;
  creation_date:Date;
  total:number;
  pending:number;
  currency:string;
  exchange_rate:number;
  status:number;
  has_file_xml?:number;
  has_file_pdf?:number;
  reason_id:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface credit_notesInstance extends Sequelize.Instance<credit_notesAttribute>, credit_notesAttribute { }
export interface credit_notesModel extends Sequelize.Model<credit_notesInstance, credit_notesAttribute> { }

// table: credit_payments
export interface credit_paymentsAttribute {
  company_id?:number;
  rel_cred_pago?:number;
}
export interface credit_paymentsInstance extends Sequelize.Instance<credit_paymentsAttribute>, credit_paymentsAttribute { }
export interface credit_paymentsModel extends Sequelize.Model<credit_paymentsInstance, credit_paymentsAttribute> { }

// table: credit_report_credits
export interface credit_report_creditsAttribute {
  id:number;
  created_at:Date;
  updated_at:Date;
  credit_report_company_id:number;
  credit_experiences:number;
  contract_number:string;
  old_contract_number:string;
  opening_date:Date;
  term_months:number;
  credit_type:number;
  initial_balance:number;
  currency:number;
  number_of_payments:number;
  frecuency_of_payments:number;
  payment_amount:number;
  last_payment_date:Date;
  restructuring_date:Date;
  payment_to_close:number;
  settlement_date:Date;
  release_of_debt:number;
  payment_in_king:number;
  brokenness_amount:number;
  observation_key:string;
  especial:string;
  first_non_compliance_date:Date;
  outstanding_balance:number;
  maximum_credit:number;
  due_days:number;
  balance:number;
}
export interface credit_report_creditsInstance extends Sequelize.Instance<credit_report_creditsAttribute>, credit_report_creditsAttribute { }
export interface credit_report_creditsModel extends Sequelize.Model<credit_report_creditsInstance, credit_report_creditsAttribute> { }

// table: credit_report_addresses
export interface credit_report_addressesAttribute {
  id:number;
  created_at:Date;
  updated_at:Date;
  credit_report_customer_id:number;
  address_1:string;
  address_2:string;
  suburb:string;
  zip_code:string;
  municipality:string;
  city:string;
  state:string;
  county:string;
  phone:string;
}
export interface credit_report_addressesInstance extends Sequelize.Instance<credit_report_addressesAttribute>, credit_report_addressesAttribute { }
export interface credit_report_addressesModel extends Sequelize.Model<credit_report_addressesInstance, credit_report_addressesAttribute> { }

// table: credit_report_companies
export interface credit_report_companiesAttribute {
  id:number;
  created_at:Date;
  updated_at:Date;
  customer_id:number;
  company_id:number;
  client_type:number;
  curp:string;
  dun_number:string;
  trade_name:string;
  name_1:string;
  name_2:string;
  surname_1:string;
  surname_2:string;
  nationality:string;
  address_1:string;
  address_2:string;
  suburb:string;
  zip_code:string;
  municipality:string;
  city:string;
  state:string;
  foreign_state:string;
  county:string;
  phone:string;
  phone_ext:string;
  fax:string;
  portafolio_rating:string;
  banxico_1:string;
  banxico_2:string;
  banxico_3:string;
  consolidation_key:string;
  deleted_at?:Date;
}
export interface credit_report_companiesInstance extends Sequelize.Instance<credit_report_companiesAttribute>, credit_report_companiesAttribute { }
export interface credit_report_companiesModel extends Sequelize.Model<credit_report_companiesInstance, credit_report_companiesAttribute> { }

// table: credit_report_endorses
export interface credit_report_endorsesAttribute {
  id:number;
  created_at:Date;
  updated_at:Date;
  credit_report_company_id:number;
  client_type:number;
  curp:string;
  dun_number:string;
  trade_name:string;
  name_1:string;
  name_2:string;
  surname_1:string;
  surname_2:string;
  nationality:string;
  address_1:string;
  address_2:string;
  suburb:string;
  zip_code:string;
  municipality:string;
  city:string;
  state:string;
  foreign_state:string;
  county:string;
  phone:string;
  phone_ext:string;
  fax:string;
}
export interface credit_report_endorsesInstance extends Sequelize.Instance<credit_report_endorsesAttribute>, credit_report_endorsesAttribute { }
export interface credit_report_endorsesModel extends Sequelize.Model<credit_report_endorsesInstance, credit_report_endorsesAttribute> { }

// table: credit_report_morals
export interface credit_report_moralsAttribute {
  id:number;
  created_at:Date;
  updated_at:Date;
  company_id:number;
  reported:Date;
  version:string;
  period_month:string;
  period_year:string;
  deleted_at?:Date;
}
export interface credit_report_moralsInstance extends Sequelize.Instance<credit_report_moralsAttribute>, credit_report_moralsAttribute { }
export interface credit_report_moralsModel extends Sequelize.Model<credit_report_moralsInstance, credit_report_moralsAttribute> { }

// table: credit_report_customers
export interface credit_report_customersAttribute {
  id:number;
  created_at:Date;
  updated_at:Date;
  company_id:number;
  customer_id:number;
  prefix_title:string;
  name_1:string;
  name_2:string;
  surname_1:string;
  surname_2:string;
  birthday:Date;
  nationality:string;
  marital_status:string;
  sex:string;
  death_date:Date;
  death_indicator:string;
}
export interface credit_report_customersInstance extends Sequelize.Instance<credit_report_customersAttribute>, credit_report_customersAttribute { }
export interface credit_report_customersModel extends Sequelize.Model<credit_report_customersInstance, credit_report_customersAttribute> { }

// table: credit_report_employments
export interface credit_report_employmentsAttribute {
  id:number;
  created_at:Date;
  updated_at:Date;
  credit_report_customer_id:number;
  company_name:string;
  address_1:string;
  address_2:string;
  suburb:string;
  zip_code:string;
  municipality:string;
  city:string;
  state:string;
  county:string;
  phone:string;
  phone_ext:string;
  fax:string;
  job:string;
  hiring_date:Date;
  currency:string;
  monthly_salary:number;
  last_employment_date:Date;
  employment_verification_date:Date;
}
export interface credit_report_employmentsInstance extends Sequelize.Instance<credit_report_employmentsAttribute>, credit_report_employmentsAttribute { }
export interface credit_report_employmentsModel extends Sequelize.Model<credit_report_employmentsInstance, credit_report_employmentsAttribute> { }

// table: credit_reports
export interface credit_reportsAttribute {
  id:number;
  created_at:Date;
  updated_at:Date;
  company_id:number;
  reported:Date;
  deleted_at?:Date;
}
export interface credit_reportsInstance extends Sequelize.Instance<credit_reportsAttribute>, credit_reportsAttribute { }
export interface credit_reportsModel extends Sequelize.Model<credit_reportsInstance, credit_reportsAttribute> { }

// table: cuenta_clabe_control
export interface cuenta_clabe_controlAttribute {
  id:number;
  client_number:number;
  cost_center:number;
  status:string;
  remember_token?:string;
  created_at:Date;
  updated_at:Date;
}
export interface cuenta_clabe_controlInstance extends Sequelize.Instance<cuenta_clabe_controlAttribute>, cuenta_clabe_controlAttribute { }
export interface cuenta_clabe_controlModel extends Sequelize.Model<cuenta_clabe_controlInstance, cuenta_clabe_controlAttribute> { }

// table: credit_report_shareholders
export interface credit_report_shareholdersAttribute {
  id:number;
  created_at:Date;
  updated_at:Date;
  credit_report_company_id:number;
  client_type:number;
  percent:number;
  curp:string;
  dun_number:string;
  trade_name:string;
  name_1:string;
  name_2:string;
  surname_1:string;
  surname_2:string;
  nationality:string;
  address_1:string;
  address_2:string;
  suburb:string;
  zip_code:string;
  municipality:string;
  city:string;
  state:string;
  foreign_state:string;
  county:string;
  phone:string;
  phone_ext:string;
  fax:string;
  rfc:string;
  deleted_at?:Date;
}
export interface credit_report_shareholdersInstance extends Sequelize.Instance<credit_report_shareholdersAttribute>, credit_report_shareholdersAttribute { }
export interface credit_report_shareholdersModel extends Sequelize.Model<credit_report_shareholdersInstance, credit_report_shareholdersAttribute> { }

// table: customers
export interface customersAttribute {
  id:number;
  company_id:number;
  user_id?:string;
  rfc:string;
  user_id_conptaqi:number;
  customer_key_contpaqi:string;
  name:string;
  review_days?:number;
  credit_days?:number;
  identifier?:string;
  credit?:any;
  balance:any;
  credit_used:any;
  email:string;
  phone:string;
  address:string;
  number?:string;
  internal_number?:string;
  zip_code?:number;
  suburb?:string;
  city?:string;
  state?:string;
  country?:string;
  deleted_at?:Date;
  created_at:Date;
  updated_at:Date;
  credit_report_company_id?:number;
  credit_report_customer_id?:number;
  email1:string;
  email2:string;
  email3:string;
  email4:string;
  parent_id?:number;
  subsidiary?:string;
  interest_percent?:number;
}
export interface customersInstance extends Sequelize.Instance<customersAttribute>, customersAttribute { }
export interface customersModel extends Sequelize.Model<customersInstance, customersAttribute> { }

// table: customers_pending_balance
export interface customers_pending_balanceAttribute {
  customer_id:number;
  total_pending_balance?:number;
  receivables_count:number;
  expired:number;
  status:number;
}
export interface customers_pending_balanceInstance extends Sequelize.Instance<customers_pending_balanceAttribute>, customers_pending_balanceAttribute { }
export interface customers_pending_balanceModel extends Sequelize.Model<customers_pending_balanceInstance, customers_pending_balanceAttribute> { }

// table: currencies
export interface currenciesAttribute {
  id:number;
  currency_code:string;
  currency_name:string;
  decimals:number;
  created_at:Date;
  updated_at:Date;
}
export interface currenciesInstance extends Sequelize.Instance<currenciesAttribute>, currenciesAttribute { }
export interface currenciesModel extends Sequelize.Model<currenciesInstance, currenciesAttribute> { }

// table: customer_invites
export interface customer_invitesAttribute {
  id:number;
  company_id:number;
  user_id:number;
  customer_id:number;
  email:string;
  token:string;
  access_date?:Date;
  expirated_at:Date;
  deleted_at?:Date;
  created_at:Date;
  updated_at:Date;
}
export interface customer_invitesInstance extends Sequelize.Instance<customer_invitesAttribute>, customer_invitesAttribute { }
export interface customer_invitesModel extends Sequelize.Model<customer_invitesInstance, customer_invitesAttribute> { }

// table: customers_without_logbook
export interface customers_without_logbookAttribute {
  company_id:number;
  customers:number;
}
export interface customers_without_logbookInstance extends Sequelize.Instance<customers_without_logbookAttribute>, customers_without_logbookAttribute { }
export interface customers_without_logbookModel extends Sequelize.Model<customers_without_logbookInstance, customers_without_logbookAttribute> { }

// table: discounts
export interface discountsAttribute {
  id:number;
  user_id:number;
  receivable_id:number;
  percent:any;
  comment:string;
  expiration_date:Date;
  realized:number;
  amount:any;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface discountsInstance extends Sequelize.Instance<discountsAttribute>, discountsAttribute { }
export interface discountsModel extends Sequelize.Model<discountsInstance, discountsAttribute> { }

// table: customers_unassigned
export interface customers_unassignedAttribute {
  company_id:number;
  customers:number;
}
export interface customers_unassignedInstance extends Sequelize.Instance<customers_unassignedAttribute>, customers_unassignedAttribute { }
export interface customers_unassignedModel extends Sequelize.Model<customers_unassignedInstance, customers_unassignedAttribute> { }

// table: distributors
export interface distributorsAttribute {
  id:number;
  name:string;
  code:string;
  created_at:Date;
  updated_at:Date;
  user_id?:number;
  parent_id?:number;
  rfc?:string;
  business_name?:string;
  is_active:number;
  distributor_level_id?:number;
}
export interface distributorsInstance extends Sequelize.Instance<distributorsAttribute>, distributorsAttribute { }
export interface distributorsModel extends Sequelize.Model<distributorsInstance, distributorsAttribute> { }

// table: economic_sectors
export interface economic_sectorsAttribute {
  id:number;
  name:string;
  created_at:Date;
  updated_at:Date;
}
export interface economic_sectorsInstance extends Sequelize.Instance<economic_sectorsAttribute>, economic_sectorsAttribute { }
export interface economic_sectorsModel extends Sequelize.Model<economic_sectorsInstance, economic_sectorsAttribute> { }

// table: dispersion_orders
export interface dispersion_ordersAttribute {
  id:number;
  company_id:number;
  payment_id:number;
  parent_id?:number;
  order_id?:number;
  amount:any;
  data:string;
  status:number;
  attempt:number;
  reason_error:number;
  message_error:string;
  created_at:Date;
  updated_at:Date;
}
export interface dispersion_ordersInstance extends Sequelize.Instance<dispersion_ordersAttribute>, dispersion_ordersAttribute { }
export interface dispersion_ordersModel extends Sequelize.Model<dispersion_ordersInstance, dispersion_ordersAttribute> { }

// table: distributor_levels
export interface distributor_levelsAttribute {
  id:number;
  name:string;
  created_at:Date;
  updated_at:Date;
}
export interface distributor_levelsInstance extends Sequelize.Instance<distributor_levelsAttribute>, distributor_levelsAttribute { }
export interface distributor_levelsModel extends Sequelize.Model<distributor_levelsInstance, distributor_levelsAttribute> { }

// table: extensions
export interface extensionsAttribute {
  id:number;
  user_id:number;
  receivable_id?:number;
  collection_policies_id?:number;
  previous:Date;
  current:Date;
  comment:string;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface extensionsInstance extends Sequelize.Instance<extensionsAttribute>, extensionsAttribute { }
export interface extensionsModel extends Sequelize.Model<extensionsInstance, extensionsAttribute> { }

// table: failed_jobs
export interface failed_jobsAttribute {
  id:number;
  connection:string;
  queue:string;
  payload:string;
  failed_at:Date;
}
export interface failed_jobsInstance extends Sequelize.Instance<failed_jobsAttribute>, failed_jobsAttribute { }
export interface failed_jobsModel extends Sequelize.Model<failed_jobsInstance, failed_jobsAttribute> { }

// table: erps
export interface erpsAttribute {
  id:number;
  name:string;
  active:number;
  created_at:Date;
  updated_at:Date;
}
export interface erpsInstance extends Sequelize.Instance<erpsAttribute>, erpsAttribute { }
export interface erpsModel extends Sequelize.Model<erpsInstance, erpsAttribute> { }

// table: history_invoices
export interface history_invoicesAttribute {
  id:number;
  user_id?:number;
  receivable_id:number;
  company_id:number;
  status:number;
  created_at:Date;
  updated_at:Date;
}
export interface history_invoicesInstance extends Sequelize.Instance<history_invoicesAttribute>, history_invoicesAttribute { }
export interface history_invoicesModel extends Sequelize.Model<history_invoicesInstance, history_invoicesAttribute> { }

// table: import_data_service_logs
export interface import_data_service_logsAttribute {
  id:number;
  company_id:number;
  clients?:number;
  receivables?:number;
  imported_payments?:number;
  billed_payments?:number;
  canceled_payments?:number;
  credit_notes?:number;
  exported_payments?:number;
  payments_with_errors?:number;
  created_at:Date;
  updated_at:Date;
}
export interface import_data_service_logsInstance extends Sequelize.Instance<import_data_service_logsAttribute>, import_data_service_logsAttribute { }
export interface import_data_service_logsModel extends Sequelize.Model<import_data_service_logsInstance, import_data_service_logsAttribute> { }

// table: historial_deuda_comentarios
export interface historial_deuda_comentariosAttribute {
  id:number;
  user_id:number;
  collection_policies_id:number;
  comment:string;
  created_at:Date;
  updated_at:Date;
}
export interface historial_deuda_comentariosInstance extends Sequelize.Instance<historial_deuda_comentariosAttribute>, historial_deuda_comentariosAttribute { }
export interface historial_deuda_comentariosModel extends Sequelize.Model<historial_deuda_comentariosInstance, historial_deuda_comentariosAttribute> { }

// table: history_assignments
export interface history_assignmentsAttribute {
  id:number;
  user_id?:number;
  customer_id:number;
  assignment:number;
  created_at:Date;
  updated_at:Date;
}
export interface history_assignmentsInstance extends Sequelize.Instance<history_assignmentsAttribute>, history_assignmentsAttribute { }
export interface history_assignmentsModel extends Sequelize.Model<history_assignmentsInstance, history_assignmentsAttribute> { }

// table: incidences
export interface incidencesAttribute {
  id:number;
  user_id:number;
  customer_id:number;
  receivable_id:number;
  incidence_reason_id:number;
  responsible:string;
  date_resolution:Date;
  description:string;
  resolution_status:number;
  resolution_message:string;
  resolution_date:Date;
  created_at:Date;
  updated_at:Date;
}
export interface incidencesInstance extends Sequelize.Instance<incidencesAttribute>, incidencesAttribute { }
export interface incidencesModel extends Sequelize.Model<incidencesInstance, incidencesAttribute> { }

// table: invoice_json
export interface invoice_jsonAttribute {
  id:number;
  data:string;
  receivable_id:number;
  created_at:Date;
  updated_at:Date;
}
export interface invoice_jsonInstance extends Sequelize.Instance<invoice_jsonAttribute>, invoice_jsonAttribute { }
export interface invoice_jsonModel extends Sequelize.Model<invoice_jsonInstance, invoice_jsonAttribute> { }

// table: incidence_reasons
export interface incidence_reasonsAttribute {
  id:number;
  reason:string;
  created_at:Date;
  updated_at:Date;
}
export interface incidence_reasonsInstance extends Sequelize.Instance<incidence_reasonsAttribute>, incidence_reasonsAttribute { }
export interface incidence_reasonsModel extends Sequelize.Model<incidence_reasonsInstance, incidence_reasonsAttribute> { }

// table: licences
export interface licencesAttribute {
  id:number;
  plan_id?:number;
  distributor_id:number;
  user_id?:number;
  code:string;
  price:number;
  invoices:number;
  sms:number;
  accounts:number;
  rfc:number;
  sic:number;
  activation:Date;
  expiration:Date;
  created_at:Date;
  updated_at:Date;
  administrators:number;
  agents:number;
  deleted_at?:Date;
  disabled:number;
  multiCompany:number;
}
export interface licencesInstance extends Sequelize.Instance<licencesAttribute>, licencesAttribute { }
export interface licencesModel extends Sequelize.Model<licencesInstance, licencesAttribute> { }

// table: jobs
export interface jobsAttribute {
  id:number;
  queue:string;
  payload:string;
  attempts:number;
  reserved?:number;
  reserved_at?:number;
  available_at:number;
  created_at:number;
}
export interface jobsInstance extends Sequelize.Instance<jobsAttribute>, jobsAttribute { }
export interface jobsModel extends Sequelize.Model<jobsInstance, jobsAttribute> { }

// table: licence_renewals
export interface licence_renewalsAttribute {
  id:number;
  licence_id:number;
  plan_id?:number;
  distributor_id:number;
  user_id:number;
  code:string;
  activation:Date;
  expiration:Date;
  price:number;
  invoices:number;
  sms:number;
  accounts:number;
  rfc:number;
  sic:number;
  administrators:number;
  agents:number;
  multiCompany:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface licence_renewalsInstance extends Sequelize.Instance<licence_renewalsAttribute>, licence_renewalsAttribute { }
export interface licence_renewalsModel extends Sequelize.Model<licence_renewalsInstance, licence_renewalsAttribute> { }

// table: licenses_feraz
export interface licenses_ferazAttribute {
  id:number;
  company_id:number;
  company:string;
  user:string;
  password:string;
  created_at:Date;
  updated_at:Date;
}
export interface licenses_ferazInstance extends Sequelize.Instance<licenses_ferazAttribute>, licenses_ferazAttribute { }
export interface licenses_ferazModel extends Sequelize.Model<licenses_ferazInstance, licenses_ferazAttribute> { }

// table: logbook
export interface logbookAttribute {
  id:number;
  user_id:number;
  customer_id?:number;
  external_id?:number;
  type:number;
  promise?:Date;
  amount?:any;
  comment:string;
  complete:number;
  father:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface logbookInstance extends Sequelize.Instance<logbookAttribute>, logbookAttribute { }
export interface logbookModel extends Sequelize.Model<logbookInstance, logbookAttribute> { }

// table: license_payments
export interface license_paymentsAttribute {
  id:number;
  user_id:number;
  licence_id:number;
  date:Date;
  description:string;
  amount:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface license_paymentsInstance extends Sequelize.Instance<license_paymentsAttribute>, license_paymentsAttribute { }
export interface license_paymentsModel extends Sequelize.Model<license_paymentsInstance, license_paymentsAttribute> { }

// table: licenses_contpaqi
export interface licenses_contpaqiAttribute {
  id:number;
  company_id:number;
  license:string;
  user:string;
  password:string;
  created_at:Date;
  sync_end?:Date;
  sync_start?:Date;
  updated_at:Date;
  in_progress:number;
  sync:number;
  sync_enabled:number;
}
export interface licenses_contpaqiInstance extends Sequelize.Instance<licenses_contpaqiAttribute>, licenses_contpaqiAttribute { }
export interface licenses_contpaqiModel extends Sequelize.Model<licenses_contpaqiInstance, licenses_contpaqiAttribute> { }

// table: migrations
export interface migrationsAttribute {
  migration:string;
  batch:number;
}
export interface migrationsInstance extends Sequelize.Instance<migrationsAttribute>, migrationsAttribute { }
export interface migrationsModel extends Sequelize.Model<migrationsInstance, migrationsAttribute> { }

// table: notification_rules
export interface notification_rulesAttribute {
  company_id:number;
  reglas:number;
}
export interface notification_rulesInstance extends Sequelize.Instance<notification_rulesAttribute>, notification_rulesAttribute { }
export interface notification_rulesModel extends Sequelize.Model<notification_rulesInstance, notification_rulesAttribute> { }

// table: notification_templates
export interface notification_templatesAttribute {
  company_id?:number;
  templates:number;
}
export interface notification_templatesInstance extends Sequelize.Instance<notification_templatesAttribute>, notification_templatesAttribute { }
export interface notification_templatesModel extends Sequelize.Model<notification_templatesInstance, notification_templatesAttribute> { }

// table: logbook_payment
export interface logbook_paymentAttribute {
  id:number;
  payment_id:number;
  action:string;
  success:number;
  created_at:Date;
  updated_at:Date;
}
export interface logbook_paymentInstance extends Sequelize.Instance<logbook_paymentAttribute>, logbook_paymentAttribute { }
export interface logbook_paymentModel extends Sequelize.Model<logbook_paymentInstance, logbook_paymentAttribute> { }

// table: notifications_config
export interface notifications_configAttribute {
  id:number;
  title:string;
  body:string;
  config_types:number;
  config_days:number;
  include_files:number;
  type:number;
  status:number;
  last_send_at?:Date;
  counter_email_open:number;
  date_email_open?:Date;
  company_id:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
  recipient_type:number;
  account_status:number;
  config_day_month?:number;
  last_day_month?:number;
  user_id?:number;
}
export interface notifications_configInstance extends Sequelize.Instance<notifications_configAttribute>, notifications_configAttribute { }
export interface notifications_configModel extends Sequelize.Model<notifications_configInstance, notifications_configAttribute> { }

// table: notifications_customers
export interface notifications_customersAttribute {
  id:number;
  customer_id:number;
  notifications_config_id:number;
  created_at:Date;
  updated_at:Date;
}
export interface notifications_customersInstance extends Sequelize.Instance<notifications_customersAttribute>, notifications_customersAttribute { }
export interface notifications_customersModel extends Sequelize.Model<notifications_customersInstance, notifications_customersAttribute> { }

// table: notifications
export interface notificationsAttribute {
  id:number;
  user_id?:number;
  email:string;
  title:string;
  body:string;
  type:number;
  status:number;
  send_notification:number;
  last_send_at?:Date;
  custom_at?:Date;
  days_of_week?:string;
  counter_email_open:number;
  date_email_open?:Date;
  customer_id:number;
  created_at:Date;
  updated_at:Date;
  account_status:number;
  sent:number;
  webhook_bounced:number;
  webhook_delivered:number;
  webhook_opened:number;
}
export interface notificationsInstance extends Sequelize.Instance<notificationsAttribute>, notificationsAttribute { }
export interface notificationsModel extends Sequelize.Model<notificationsInstance, notificationsAttribute> { }

// table: oauth_access_tokens
export interface oauth_access_tokensAttribute {
  id:string;
  user_id?:number;
  client_id:number;
  name?:string;
  scopes?:string;
  revoked:number;
  created_at?:Date;
  updated_at?:Date;
  expires_at?:Date;
}
export interface oauth_access_tokensInstance extends Sequelize.Instance<oauth_access_tokensAttribute>, oauth_access_tokensAttribute { }
export interface oauth_access_tokensModel extends Sequelize.Model<oauth_access_tokensInstance, oauth_access_tokensAttribute> { }

// table: oauth_auth_codes
export interface oauth_auth_codesAttribute {
  id:string;
  user_id:number;
  client_id:number;
  scopes?:string;
  revoked:number;
  expires_at?:Date;
}
export interface oauth_auth_codesInstance extends Sequelize.Instance<oauth_auth_codesAttribute>, oauth_auth_codesAttribute { }
export interface oauth_auth_codesModel extends Sequelize.Model<oauth_auth_codesInstance, oauth_auth_codesAttribute> { }

// table: notifications_sms
export interface notifications_smsAttribute {
  id:number;
  user_id:number;
  customer_id:number;
  sender:string;
  receiver:string;
  is_response:number;
  date:Date;
  date_open?:Date;
  responses:number;
  phone:string;
  message:string;
  id_response:string;
  id_parent:number;
  status:number;
  created_at:Date;
  updated_at:Date;
}
export interface notifications_smsInstance extends Sequelize.Instance<notifications_smsAttribute>, notifications_smsAttribute { }
export interface notifications_smsModel extends Sequelize.Model<notifications_smsInstance, notifications_smsAttribute> { }

// table: notifications_templates
export interface notifications_templatesAttribute {
  id:number;
  title:string;
  template_name:string;
  body:string;
  user_id:number;
  company_id?:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
  account_status:number;
}
export interface notifications_templatesInstance extends Sequelize.Instance<notifications_templatesAttribute>, notifications_templatesAttribute { }
export interface notifications_templatesModel extends Sequelize.Model<notifications_templatesInstance, notifications_templatesAttribute> { }

// table: oauth_personal_access_clients
export interface oauth_personal_access_clientsAttribute {
  id:number;
  client_id:number;
  created_at?:Date;
  updated_at?:Date;
}
export interface oauth_personal_access_clientsInstance extends Sequelize.Instance<oauth_personal_access_clientsAttribute>, oauth_personal_access_clientsAttribute { }
export interface oauth_personal_access_clientsModel extends Sequelize.Model<oauth_personal_access_clientsInstance, oauth_personal_access_clientsAttribute> { }

// table: oauth_refresh_tokens
export interface oauth_refresh_tokensAttribute {
  id:string;
  access_token_id:string;
  revoked:number;
  expires_at?:Date;
}
export interface oauth_refresh_tokensInstance extends Sequelize.Instance<oauth_refresh_tokensAttribute>, oauth_refresh_tokensAttribute { }
export interface oauth_refresh_tokensModel extends Sequelize.Model<oauth_refresh_tokensInstance, oauth_refresh_tokensAttribute> { }

// table: password_resets
export interface password_resetsAttribute {
  email:string;
  token:string;
  created_at:Date;
}
export interface password_resetsInstance extends Sequelize.Instance<password_resetsAttribute>, password_resetsAttribute { }
export interface password_resetsModel extends Sequelize.Model<password_resetsInstance, password_resetsAttribute> { }

// table: oauth_clients
export interface oauth_clientsAttribute {
  id:number;
  user_id?:number;
  name:string;
  secret:string;
  redirect:string;
  personal_access_client:number;
  password_client:number;
  revoked:number;
  created_at?:Date;
  updated_at?:Date;
}
export interface oauth_clientsInstance extends Sequelize.Instance<oauth_clientsAttribute>, oauth_clientsAttribute { }
export interface oauth_clientsModel extends Sequelize.Model<oauth_clientsInstance, oauth_clientsAttribute> { }

// table: payment_concepts
export interface payment_conceptsAttribute {
  id:number;
  company_id:number;
  concept_id_contpaqi:number;
  concept_key_contpaqi:string;
  document_type:number;
  description:string;
  created_at:Date;
  updated_at:Date;
}
export interface payment_conceptsInstance extends Sequelize.Instance<payment_conceptsAttribute>, payment_conceptsAttribute { }
export interface payment_conceptsModel extends Sequelize.Model<payment_conceptsInstance, payment_conceptsAttribute> { }

// table: payment_formats
export interface payment_formatsAttribute {
  id:number;
  clave:string;
  description:string;
  banker:number;
  operation_number:number;
  rfc_account_issuer:number;
  account_issuer:number;
  pattern_issuer:string;
  rfc_issuer:number;
  account_beneficiary:number;
  pattern_beneficiary:string;
  type_payment:number;
  bank_issuer:string;
  effective_date:Date;
  created_at:Date;
  updated_at:Date;
}
export interface payment_formatsInstance extends Sequelize.Instance<payment_formatsAttribute>, payment_formatsAttribute { }
export interface payment_formatsModel extends Sequelize.Model<payment_formatsInstance, payment_formatsAttribute> { }

// table: payment_methods
export interface payment_methodsAttribute {
  id:number;
  payment_method_code:string;
  payment_method_name:string;
  effective_date:Date;
  created_at:Date;
  updated_at:Date;
}
export interface payment_methodsInstance extends Sequelize.Instance<payment_methodsAttribute>, payment_methodsAttribute { }
export interface payment_methodsModel extends Sequelize.Model<payment_methodsInstance, payment_methodsAttribute> { }

// table: pay_days
export interface pay_daysAttribute {
  company_id?:number;
  payDays:number;
}
export interface pay_daysInstance extends Sequelize.Instance<pay_daysAttribute>, pay_daysAttribute { }
export interface pay_daysModel extends Sequelize.Model<pay_daysInstance, pay_daysAttribute> { }

// table: payment_promise
export interface payment_promiseAttribute {
  id:number;
  user_id:number;
  customer_id:number;
  receivable_id?:number;
  date:Date;
  amount:any;
  status:number;
  reason:string;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface payment_promiseInstance extends Sequelize.Instance<payment_promiseAttribute>, payment_promiseAttribute { }
export interface payment_promiseModel extends Sequelize.Model<payment_promiseInstance, payment_promiseAttribute> { }

// table: payment_promise_receivables
export interface payment_promise_receivablesAttribute {
  id:number;
  payment_promise_id:number;
  receivable_id:number;
  created_at:Date;
  updated_at:Date;
}
export interface payment_promise_receivablesInstance extends Sequelize.Instance<payment_promise_receivablesAttribute>, payment_promise_receivablesAttribute { }
export interface payment_promise_receivablesModel extends Sequelize.Model<payment_promise_receivablesInstance, payment_promise_receivablesAttribute> { }

// table: payment_request_receivable
export interface payment_request_receivableAttribute {
  id:number;
  payment_request_id:number;
  receivable_id:number;
  amount_without_convertion:any;
  total:number;
  currency:string;
  exchange_rate:number;
  deleted_at?:Date;
  created_at:Date;
  updated_at:Date;
}
export interface payment_request_receivableInstance extends Sequelize.Instance<payment_request_receivableAttribute>, payment_request_receivableAttribute { }
export interface payment_request_receivableModel extends Sequelize.Model<payment_request_receivableInstance, payment_request_receivableAttribute> { }

// table: payment_periods
export interface payment_periodsAttribute {
  id:number;
  company_id:number;
  days:number;
  before:number;
  created_at:Date;
  updated_at:Date;
}
export interface payment_periodsInstance extends Sequelize.Instance<payment_periodsAttribute>, payment_periodsAttribute { }
export interface payment_periodsModel extends Sequelize.Model<payment_periodsInstance, payment_periodsAttribute> { }

// table: payments_receivable
export interface payments_receivableAttribute {
  id:number;
  payment_id?:number;
  credit_note_id?:number;
  receivable_id:number;
  folio:string;
  previous_balance:number;
  amount_without_convertion:any;
  total:number;
  balance:number;
  currency:string;
  exchange_rate:number;
  payment_number:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface payments_receivableInstance extends Sequelize.Instance<payments_receivableAttribute>, payments_receivableAttribute { }
export interface payments_receivableModel extends Sequelize.Model<payments_receivableInstance, payments_receivableAttribute> { }

// table: payments_request
export interface payments_requestAttribute {
  id:number;
  customer_id:number;
  company_id:number;
  payment_format_id:number;
  account_id?:number;
  date:Date;
  reference?:string;
  concept?:string;
  total:number;
  pending:number;
  currency:string;
  exchange_rate:number;
  operation_number:string;
  sender_bank_id?:number;
  account_sender:string;
  type_payment_chain:string;
  certificate:string;
  chain:string;
  seal:string;
  file:string;
  status:number;
  reason:string;
  email:string;
  deleted_at?:Date;
  created_at:Date;
  updated_at:Date;
  voucher?:string;
}
export interface payments_requestInstance extends Sequelize.Instance<payments_requestAttribute>, payments_requestAttribute { }
export interface payments_requestModel extends Sequelize.Model<payments_requestInstance, payments_requestAttribute> { }

// table: periods
export interface periodsAttribute {
  id:number;
  company_id:number;
  status:number;
  open:number;
  date?:Date;
  last_update?:Date;
  start?:Date;
  end?:Date;
  data:string;
  data_status:string;
  without_allocate:any;
  recovery_total:any;
  recovery_expired:any;
  recovery_expired_last:any;
  recovery_current:any;
  recovery_goal:any;
  recovery_portfolio:any;
  previous?:number;
  next?:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
}
export interface periodsInstance extends Sequelize.Instance<periodsAttribute>, periodsAttribute { }
export interface periodsModel extends Sequelize.Model<periodsInstance, periodsAttribute> { }

// table: payments
export interface paymentsAttribute {
  id:number;
  bank_id?:number;
  account_id?:number;
  customer_id?:number;
  registration_user_id?:number;
  transaction_id?:number;
  status:number;
  has_file_xml?:number;
  has_file_pdf?:number;
  date:Date;
  identification_date?:Date;
  account_number?:string;
  reference:string;
  reference_avanttia:string;
  concept:string;
  payment_concept_id?:number;
  folio:string;
  user_id?:number;
  company_id?:number;
  total:number;
  pending:number;
  payment_format_id?:number;
  currency?:string;
  exchange_rate?:number;
  operation_number?:string;
  foreign_bank_sender?:string;
  foreign_bank_rfc_sender?:string;
  account_sender?:string;
  type_payment_chain?:string;
  certificate?:string;
  chain?:string;
  seal?:string;
  uuid?:string;
  folio_cfdi:string;
  serie_cfdi:string;
  date_stamping?:Date;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
  sync_operation:number;
  sync_status:number;
  account_sender_id:number;
  document_id_contpaqi:number;
  sync_error:number;
  sync_message:string;
  avanttia_stamped:number;
  exported:number;
  voucher?:string;
}
export interface paymentsInstance extends Sequelize.Instance<paymentsAttribute>, paymentsAttribute { }
export interface paymentsModel extends Sequelize.Model<paymentsInstance, paymentsAttribute> { }

// table: permissions
export interface permissionsAttribute {
  id:number;
  name:string;
  display_name?:string;
  description?:string;
  created_at:Date;
  updated_at:Date;
}
export interface permissionsInstance extends Sequelize.Instance<permissionsAttribute>, permissionsAttribute { }
export interface permissionsModel extends Sequelize.Model<permissionsInstance, permissionsAttribute> { }

// table: plans
export interface plansAttribute {
  id:number;
  name:string;
  price?:string;
  validity:number;
  invoices?:string;
  sms?:string;
  accounts?:string;
  rfc?:string;
  sic?:string;
  date_limit?:Date;
  user_limit:number;
  times_used:number;
  created_at:Date;
  updated_at:Date;
  distributor_id?:number;
  activation_code:string;
  administrators:number;
  agents:number;
  active:number;
  deleted_at?:Date;
}
export interface plansInstance extends Sequelize.Instance<plansAttribute>, plansAttribute { }
export interface plansModel extends Sequelize.Model<plansInstance, plansAttribute> { }

// table: promises_payment
export interface promises_paymentAttribute {
  company_id:number;
  payment_promises:number;
}
export interface promises_paymentInstance extends Sequelize.Instance<promises_paymentAttribute>, promises_paymentAttribute { }
export interface promises_paymentModel extends Sequelize.Model<promises_paymentInstance, promises_paymentAttribute> { }

// table: receivables
export interface receivablesAttribute {
  id:number;
  company_id?:number;
  certificate_number:string;
  reference_avanttia?:string;
  customer_id:number;
  payment_method_id?:number;
  payment_format_id?:number;
  date:Date;
  expiration_date:Date;
  paid_date?:Date;
  has_file_xml:number;
  has_file_pdf?:number;
  certificate:string;
  sub_total:any;
  currency:string;
  city:string;
  total:number;
  seal:string;
  folio:string;
  series:string;
  document_id_contpaqi:number;
  total_paid:number;
  init_pending_balance:number;
  pending_balance:number;
  status:number;
  is_paid:number;
  deleted_at?:Date;
  created_at:Date;
  updated_at:Date;
  document_id_feraz:number;
  exchange_rate:number;
  concept_key_contpaqi:string;
}
export interface receivablesInstance extends Sequelize.Instance<receivablesAttribute>, receivablesAttribute { }
export interface receivablesModel extends Sequelize.Model<receivablesInstance, receivablesAttribute> { }

// table: permission_role
export interface permission_roleAttribute {
  permission_id:number;
  role_id:number;
}
export interface permission_roleInstance extends Sequelize.Instance<permission_roleAttribute>, permission_roleAttribute { }
export interface permission_roleModel extends Sequelize.Model<permission_roleInstance, permission_roleAttribute> { }

// table: receivables_notifications
export interface receivables_notificationsAttribute {
  company_id:number;
  rel_fac_edo?:number;
}
export interface receivables_notificationsInstance extends Sequelize.Instance<receivables_notificationsAttribute>, receivables_notificationsAttribute { }
export interface receivables_notificationsModel extends Sequelize.Model<receivables_notificationsInstance, receivables_notificationsAttribute> { }

// table: recovery_goals
export interface recovery_goalsAttribute {
  id:number;
  user_id:number;
  period_id:number;
  recovery_total:any;
  recovery_expired:any;
  recovery_expired_last:any;
  recovery_current:any;
  recovery_goal:any;
  data:string;
  created_at:Date;
  updated_at:Date;
}
export interface recovery_goalsInstance extends Sequelize.Instance<recovery_goalsAttribute>, recovery_goalsAttribute { }
export interface recovery_goalsModel extends Sequelize.Model<recovery_goalsInstance, recovery_goalsAttribute> { }

// table: role_user
export interface role_userAttribute {
  user_id:number;
  role_id:number;
}
export interface role_userInstance extends Sequelize.Instance<role_userAttribute>, role_userAttribute { }
export interface role_userModel extends Sequelize.Model<role_userInstance, role_userAttribute> { }

// table: roles
export interface rolesAttribute {
  id:number;
  name:string;
  display_name?:string;
  description?:string;
  created_at:Date;
  updated_at:Date;
}
export interface rolesInstance extends Sequelize.Instance<rolesAttribute>, rolesAttribute { }
export interface rolesModel extends Sequelize.Model<rolesInstance, rolesAttribute> { }

// table: sync_log
export interface sync_logAttribute {
  id:number;
  company_id:number;
  user_id:number;
  customers:number;
  invoices:number;
  credit_notes:number;
  date_import:Date;
  date_started?:Date;
  date_finished?:Date;
  created_at:Date;
  updated_at:Date;
}
export interface sync_logInstance extends Sequelize.Instance<sync_logAttribute>, sync_logAttribute { }
export interface sync_logModel extends Sequelize.Model<sync_logInstance, sync_logAttribute> { }

// table: transactions
export interface transactionsAttribute {
  id:number;
  company_id:number;
  account_id:number;
  payment_id?:number;
  paybook_transaction_id:string;
  amount:number;
  description?:string;
  reference?:string;
  date:Date;
  status:number;
  disable:number;
  created_at:Date;
  updated_at:Date;
  deleted_at?:Date;
  identified_by?:number;
}
export interface transactionsInstance extends Sequelize.Instance<transactionsAttribute>, transactionsAttribute { }
export interface transactionsModel extends Sequelize.Model<transactionsInstance, transactionsAttribute> { }

// table: transactions_files
export interface transactions_filesAttribute {
  id:number;
  user_id:number;
  account_id:number;
  filename:string;
  map?:string;
  status:number;
  created_at:Date;
  updated_at:Date;
  skip_header:number;
  start_line:number;
}
export interface transactions_filesInstance extends Sequelize.Instance<transactions_filesAttribute>, transactions_filesAttribute { }
export interface transactions_filesModel extends Sequelize.Model<transactions_filesInstance, transactions_filesAttribute> { }

// table: sites
export interface sitesAttribute {
  id:number;
  bank_id:number;
  id_site_paybook:string;
  name:string;
  credentials:string;
  created_at:Date;
  updated_at:Date;
}
export interface sitesInstance extends Sequelize.Instance<sitesAttribute>, sitesAttribute { }
export interface sitesModel extends Sequelize.Model<sitesInstance, sitesAttribute> { }

// table: user_sync_log
export interface user_sync_logAttribute {
  id:number;
  user_id:number;
  sync_operation?:number;
  created_at:Date;
  updated_at:Date;
}
export interface user_sync_logInstance extends Sequelize.Instance<user_sync_logAttribute>, user_sync_logAttribute { }
export interface user_sync_logModel extends Sequelize.Model<user_sync_logInstance, user_sync_logAttribute> { }

// table: user_sync_log_payments
export interface user_sync_log_paymentsAttribute {
  id:number;
  user_sync_log_id:number;
  payment_id:number;
  sync_operation?:number;
  sync_operation_date?:Date;
  sync_operation_error?:number;
  sync_operation_description?:string;
  sync_operation_result?:number;
  created_at:Date;
  updated_at:Date;
}
export interface user_sync_log_paymentsInstance extends Sequelize.Instance<user_sync_log_paymentsAttribute>, user_sync_log_paymentsAttribute { }
export interface user_sync_log_paymentsModel extends Sequelize.Model<user_sync_log_paymentsInstance, user_sync_log_paymentsAttribute> { }

// table: user_notifications
export interface user_notificationsAttribute {
  id:number;
  hide:number;
  user_id:number;
  company_id:number;
  type:number;
  subtype?:number;
  data:string;
  created_at:Date;
  updated_at:Date;
  import_data_service_log_id?:number;
}
export interface user_notificationsInstance extends Sequelize.Instance<user_notificationsAttribute>, user_notificationsAttribute { }
export interface user_notificationsModel extends Sequelize.Model<user_notificationsInstance, user_notificationsAttribute> { }

// table: users
export interface usersAttribute {
  id:number;
  licence_id?:number;
  name:string;
  last:string;
  email:string;
  phone?:string;
  password:string;
  company_id?:number;
  type:number;
  remember_token?:string;
  deleted_at?:Date;
  created_at:Date;
  updated_at:Date;
  is_active:number;
  activation_token:string;
  sync_setup?:number;
  activation_token_created_at:Date;
  last_login?:Date;
  has_sign:number;
  filename_sign?:string;
}
export interface usersInstance extends Sequelize.Instance<usersAttribute>, usersAttribute { }
export interface usersModel extends Sequelize.Model<usersInstance, usersAttribute> { }

// table: webservices_log
export interface webservices_logAttribute {
  id:number;
  company_id:number;
  service:string;
  method:string;
  raw_request:string;
  raw_respose:string;
  message:string;
  type:string;
  created_at:Date;
  updated_at:Date;
}
export interface webservices_logInstance extends Sequelize.Instance<webservices_logAttribute>, webservices_logAttribute { }
export interface webservices_logModel extends Sequelize.Model<webservices_logInstance, webservices_logAttribute> { }
